import React, { Component, Fragment } from "react";
import {Form,Button,Input,DatePicker,Rate,Upload,Icon } from "antd";

 class ThemPhimAdmin extends Component {
  constructor(props){
    super(props);
    this.state={
    phim:{
        maPhim:'',
        tenPhim:'',
        biDanh:'',
        trailer:'',
        hinhAnh:'',
        moTa:'',
        ngayKhoiChieu:'',
        danhGia:'3'
    },
    errors: {
        maPhim:'',
        tenPhim:'',
        biDanh:'',
        trailer:'',
      },
      valid:false
    }
} 
handleChangeRate = danhGia => {
  this.setState({ phim:{...this.state.phim,danhGia:danhGia} });
};
handleChange=(e) =>{
  let name = e.target.name;
  let value = e.target.value;
          this.setState({
            phim: {...this.state.phim,[name]:value}
    }, () => {
      // console.log(this.state);
    })
}
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      const values = {
        ...fieldsValue,
        'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
      };
      console.log('Received values of form: ', values);
    });
  };

  // validateField=(name,field,regex,value,help)=>{
  //   let status='';
  //   let infoError='';
  //   if(name === field){
  //     if(!regex.test(value)){
  //       infoError = help;
  //        status="error";
  //     }else{
  //       status="success";
  //     }
  // }
  // }

  handleErrors = e => {
    let {name, value} = e.target;
    let status = value === '' ? name + ' không được để trống!' :'';
    let help="";
    if(name === 'maPhim'){
        let regex = /^[a-z0-9_-]{3,16}$/;
        if(!regex.test(value)){
            help = "3-6 kí tự gồm chữ cái, số và dấu gạch ngang";
           status="error";
        }else{
          status="success";
        }
    }

    if(name === 'tenPhim'){
      let regex = /^[a-zA-Z0-9 ]*$/;
      if(!regex.test(value)){
          help = "Sai định dạng";
         status="error";
      }else{
        status="success";
      }
  }
    
    this.state.valid = status === '' ? true : false;
    this.setState({
        errors: {...this.state.errors,validateStatus:status,help:help}

    })
}
  render() {
    const { getFieldDecorator } = this.props.form;
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      }
    };
    const { TextArea } = Input;
    const desc = ['Quá tệ', 'Tệ', 'Bình thường', 'Hay', 'Tuyệt vời'];
    const { danhGia } = this.state.phim;

    return (
      <Fragment>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>

          <Form.Item help={this.state.errors.help} label="Mã phim:" hasFeedback validateStatus={this.state.errors.validateStatus}>
            <Input  type="tel" name="maPhim" placeholder="Nhập mã phim" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} id="success" />
          </Form.Item>

          <Form.Item help={this.state.errors.help} label="Tên phim:" hasFeedback validateStatus={this.state.errors.validateStatus}>
            <Input type="text" name="tenPhim" placeholder="Nhập tên phim" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} id="success" />
          </Form.Item>

          <Form.Item help={this.state.errors.help} label="Bí danh:" hasFeedback validateStatus={this.state.errors.validateStatus}>
            <Input type="text" name="biDanh" placeholder="Nhập bí danh" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} id="success" />
          </Form.Item>

          <Form.Item help={this.state.errors.help} label="Trailer:" hasFeedback validateStatus={this.state.errors.validateStatus}>
            <Input type="text" name="trailer" placeholder="Nhập url trailer" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} id="success" />
          </Form.Item>

          {/* <Form.Item
            label="Fail"
            hasFeedback
            validateStatus="error"
            help="Should be combination of numbers & alphabets"
          >
            <Input placeholder="unavailable choice" id="error2" />
          </Form.Item> */}


          <Form.Item label="Ngày khởi chiếu:" hasFeedback>
          {getFieldDecorator('date-time-picker', config)(
            <DatePicker name="ngayKhoiChieu" placeholder="Chọn ngày" showTime format="YYYY-MM-DD HH:mm:ss" />,
          )}
        </Form.Item>   

          <Form.Item label="Đánh giá:">
          <span>
        <Rate tooltips={desc} onChange={this.handleChangeRate} value={danhGia} />
        {danhGia ? <span className="ant-rate-text">{desc[danhGia - 1]}</span> : ''}
      </span>
        </Form.Item>

        <Form.Item label="Hình ảnh" extra="">
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="hinhAnh" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" /> Click to upload
              </Button>
            </Upload>,
          )}
        </Form.Item>
      

          <Form.Item help={this.state.errors.help} label="Mô tả:" hasFeedback>
          <TextArea
          name="moTa"
          onChange={this.onChange}
          placeholder="Mô tả phim..."
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
          </Form.Item>
        
          
          <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button type="primary" htmlType="submit">
            Thêm
          </Button>
        </Form.Item>

        {/* <Form.Item {...formItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item> */}
        </Form>
      </Fragment>
    );
  }
}
export default Form.create()(ThemPhimAdmin);