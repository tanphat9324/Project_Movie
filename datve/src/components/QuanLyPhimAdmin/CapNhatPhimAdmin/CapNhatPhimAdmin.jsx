import React, { Component,Fragment } from 'react'
import {Form,Button,Input,DatePicker,Rate,Upload,Icon,message } from "antd";
import {connect} from 'react-redux';
import { capNhatPhimAction } from '../../../redux/actions/QuanLyPhimAction';

class CapNhatPhimAdmin extends Component {
    constructor(props){
        super(props);
        this.state={
        phim:this.props.phimSua,
        // phim:{
        //     maPhim:'',
        //     tenPhim:'',
        //     biDanh:'',
        //     trailer:'',
        //     hinhAnh:'',
        //     moTa:'',
        //     ngayKhoiChieu:'',
        //     danhGia:'3'
        // },
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

      handleSubmit = (e) => {
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
            'date_picker': fieldsValue['date-picker'].format('DD/MM/YYYY'),
            // 'date_time_picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
          };
          // console.log('Received values of form: ', values);
          this.state.phim.ngayKhoiChieu=values.date_picker;
        }).then(()=>{
          this.props.capNhatPhim(this.state.phim)
          console.log("state phim submit",this.state.phim);
        }
          
        )
        // console.log(this.state.phim);
    
      };
      
      componentWillReceiveProps(nextProps){
          this.setState({
              phimSua:nextProps.phimSua
          })
      }

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
    
        return (
          <Fragment>
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        
                <Form.Item help={this.state.errors.maPhim1} label="Mã phim:" hasFeedback validateStatus={this.state.errors.maPhim}>
                <Input  type="tel" value={this.state.phim.maPhim} name="maPhim" placeholder="Nhập mã phim" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} id="success" />
              </Form.Item>
    
              <Form.Item help={this.state.errors.tenPhim1} label="Tên phim:" hasFeedback validateStatus={this.state.errors.tenPhim}>
                <Input type="text" value={this.state.phim.tenPhim} name="tenPhim" placeholder="Nhập tên phim" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} id="success" />
              </Form.Item>
    
              <Form.Item help={this.state.errors.biDanh1} label="Bí danh:" hasFeedback validateStatus={this.state.errors.biDanh}>
                <Input type="text" value={this.state.phim.biDanh} name="biDanh" placeholder="Nhập bí danh" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} id="success" />
              </Form.Item>
    
                <Form.Item>
                <input type="file" name="hinhAnh" onChange={this.handleChange} />
                </Form.Item>
    
                <Form.Item help={this.state.errors.trailer1} label="Trailer:" hasFeedback validateStatus={this.state.errors.trailer}>
                <Input type="text" value={this.state.phim.trailer} name="trailer" placeholder="Nhập url trailer" onChange={this.handleChange} onKeyUp={this.handleErrors} onBlur={this.handleErrors} id="success" />
              </Form.Item>
    
            <Form.Item label="Ngày khởi chiếu:">
              {getFieldDecorator('date-picker', config)(
              <DatePicker name="ngayKhoiChieu" format="DD-MM-YYYY" />)}
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
              value={this.state.phim.moTa}
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

            </Form>
          </Fragment>
        );
      }
    }
    
const mapStateToProps = state => ({
    phimSua: state.QuanLyPhimReducer.phimSua
})

const mapDispatchToProps = dispatch => {
  return {
    capNhatPhim: (thongTinPhim) => {
      dispatch(capNhatPhimAction(thongTinPhim))
    }
  }
}

CapNhatPhimAdmin = Form.create()(CapNhatPhimAdmin);
export default connect(mapStateToProps, mapDispatchToProps)(CapNhatPhimAdmin);