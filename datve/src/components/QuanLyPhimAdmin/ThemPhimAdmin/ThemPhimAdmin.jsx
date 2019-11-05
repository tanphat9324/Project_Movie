/* eslint-disable react/no-direct-mutation-state */
import React, { Component, Fragment } from "react";
import {Form,Button,Input,DatePicker,Rate,Upload,Icon,message } from "antd";
import {connect} from 'react-redux';
import { themPhimAction } from "../../../redux/actions/QuanLyPhimAction";
import moment from 'moment';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
}

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
        maPhim1:'',
        tenPhim:'',
        tenPhim1:'',
        biDanh:'',
        biDanh1:'',
        trailer:'',
        trailer1:'',
        hinhAnh:'',
        hinhAnh1:'',
      },
      valid:false,
      loading: false,
    }
} 
handleChangeRate = danhGia => {
  this.setState({ phim:{...this.state.phim,danhGia:danhGia} });
};
handleChange=(e) =>{
  // let name = e.target.name;
  // let value = e.target.value;
  //         this.setState({
  //           phim: {...this.state.phim,[name]:value}
  //   }, () => {
  //     // console.log(this.state);
  //   })

    let { value, name, type } = e.target;
    if (type !== 'file') {
        this.setState({
          phim: {...this.state.phim,[name]:value}
        }, () => {
            // console.log(this.state.phim)
        })
    }else {
        //Xử lý khi post file
        console.log(e.target.files);
        this.setState({
          phim: { ...this.state.phim, [name]: e.target.files[0] }
        }, () => {
            // console.log(this.state.phim)
        })


    }
}

onChange = (date, dateString) => {
  console.log('date', dateString);
  this.setState({
    phim: {...this.state.phim,ngayKhoiChieu:dateString}
  })
}

handleChangeAvatar = info => {
  if (info.file.status === "uploading") {
    this.setState({ loading: true });
    return;
  }
  if (info.file.status === "done") {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, imageUrl =>
      this.setState({
        imageUrl,
        loading: false,
        phim:{...this.state.phim,hinhAnh:info.file.name}
      })
    );
  }
};
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
    // console.log(this.state.phim);
    this.props.themPhim(this.state.phim);
    console.log("state phim submit",this.state.phim);
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
    let status = '';
    let help="";

    if(name === 'maPhim'){
        let regex = /^[a-z0-9_-]{3,16}$/;
        if(!regex.test(value)){
            help = "3-6 kí tự gồm chữ cái, số";
           status="error";
        }else{
          status="success";
        }
    }

    if(name === 'tenPhim'){
      let regex = /^[a-zA-Z0-9 ]{3,16}$/;
      if(!regex.test(value)){
          help = "Sai định dạng ten Phim";
         status="error";
      }else{
        status="success";
      }
  }

  if(name === 'biDanh'){
    let regex = /^[a-zA-Z0-9 ]{3,16}$/;
    if(!regex.test(value)){
        help = "Sai định dạng bi danh";
       status="error";
    }else{
      status="success";
    }
}

if(name === 'trailer'){
  let regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/ 
  ;
  if(!regex.test(value)){
      help = "Sai định dạng trailer";
     status="error";
  }else{
    status="success";
  }
}

    // this.state.valid = status === '' ? true : false;
    this.setState({
        errors: {...this.state.errors,[name]:status,[name+"1"]:help}

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
    const dateFormat = 'DD/MM/YYYY';

    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? "loading" : "plus"} />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    console.log("image ủl", this.state.avatar);

    return (
      <Fragment>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
    
            <Form.Item help={this.state.errors.maPhim1} label="Mã phim:" hasFeedback validateStatus={this.state.errors.maPhim}>
            <Input  type="tel" name="maPhim" placeholder="Nhập mã phim" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} id="success" />
          </Form.Item>

          <Form.Item help={this.state.errors.tenPhim1} label="Tên phim:" hasFeedback validateStatus={this.state.errors.tenPhim}>
            <Input type="text" name="tenPhim" placeholder="Nhập tên phim" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} id="success" />
          </Form.Item>

          <Form.Item help={this.state.errors.biDanh1} label="Bí danh:" hasFeedback validateStatus={this.state.errors.biDanh}>
            <Input type="text" name="biDanh" placeholder="Nhập bí danh" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} id="success" />
          </Form.Item>

          {/* <Form.Item help={this.state.errors.hinhAnh1} label="Hình ảnh:" hasFeedback validateStatus={this.state.errors.hinhAnh}>
            <Input type="text" name="hinhAnh" placeholder="Nhập url hinh anh" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} id="success" />
          </Form.Item> */}
{/* 
          <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChangeAvatar}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
        ) : (
          uploadButton
        )}
      </Upload> */}
      {/* <div>{this.state.phim.hinhAnh}</div> */}

            <Form.Item>
            <input type="file" name="hinhAnh" onChange={this.handleChange} />
            </Form.Item>


            <Form.Item help={this.state.errors.trailer1} label="Trailer:" hasFeedback validateStatus={this.state.errors.trailer}>
            <Input type="text" name="trailer" placeholder="Nhập url trailer" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} id="success" />
          </Form.Item>

          <Form.Item label="Ngày khởi chiếu:">
            <DatePicker onChange={this.onChange} defaultValue={moment('today', dateFormat)} format={dateFormat} />
            </Form.Item>

          <Form.Item label="Đánh giá:">
          <span>
        <Rate tooltips={desc} onChange={this.handleChangeRate} value={danhGia} />
        {danhGia ? <span className="ant-rate-text">{desc[danhGia - 1]}</span> : ''}
      </span>
        </Form.Item>
          
            <Form.Item help={this.state.errors.help} label="Mô tả:" hasFeedback>
          <TextArea
          name="moTa"
          onChange={this.handleChange}
          placeholder="Mô tả phim..."
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
          </Form.Item>

        {/* <Form.Item label="Hình ảnh" extra="">
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
        </Form.Item> */}
  
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

const mapDispatchToProp = dispatch =>{
  return{
      themPhim:(thongTinPhim)=>{
          dispatch(themPhimAction(thongTinPhim))
      }
  }
}
ThemPhimAdmin = Form.create()(ThemPhimAdmin);
export default connect(null,mapDispatchToProp)(ThemPhimAdmin);

