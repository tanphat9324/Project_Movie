import React, { Component,Fragment } from 'react'
import { Select } from 'antd';
import { Table, Divider } from 'antd';
import { Form,Input,InputNumber,Button   } from 'antd';
import { DatePicker } from "antd";
import {connect} from 'react-redux';
import { taoLichChieuAction } from '../../../redux/actions/QuanLyDatVeAction';
import { layDanhMucRap, layThongTinCumRap } from '../../../redux/actions/QuanLyRapAction';
import styles from './ThongTinLichChieuAdmin.module.css'

class ThongTinLichChieuAdmin extends Component {
  constructor(props){
    super(props);
    this.state={
       dsRap:[],
       lichChieu:{
        maPhim:this.props.maPhim,
        ngayChieuGioChieu: "",
        maRap: 0,
        giaVe: 0
      }
    }
  }
componentDidMount(){
  this.props.layDanhMucRap();
}
handleChangemaRap=(e) =>{
      this.setState({
        lichChieu: {...this.state.lichChieu,maRap:e}
      })
}
handleChangeGiaVe=(e) =>{
      this.setState({
        lichChieu: {...this.state.lichChieu,giaVe:e}
      })
}

handleSubmit = e => {
  e.preventDefault();
  this.props.taoLichChieu(this.state.lichChieu);  
  console.log('lich chieu',this.state.lichChieu);
  
};
 onChange=(value, dateString) => {
  this.setState({
    lichChieu:{...this.state.lichChieu,ngayChieuGioChieu:dateString}
  })
}

 onOk=(value)=> {
  // console.log("onOk: ", value);
}

renderRap= (dsRap) => {
  this.setState({
    dsRap
  }) 
}
    render() {
        const { Option } = Select;
        const columns =[
            {
              title: 'Mã lịch chiếu',
              dataIndex: 'maPhim',
              key: 'maphim',
            },
            {
              title: 'Hệ thống rạp',
              dataIndex: 'tenPhim',
              key: 'tenphim',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Cụm rạp',
              dataIndex: 'hinhAnh',
              key: 'hinhanh',
              render: (text, record) => (
                  <img title={record.tenPhim} src={record.hinhAnh} width="50px" height="70px"/>
                ),
            },
            {
              title: 'Ngày giờ chiếu',
              dataIndex: 'moTa',
              key: 'mota',
              render: (text, record) => (
                <div title={record.moTa} style={{whiteSpace:"nowrap",overflow:'hidden',textOverflow:'ellipsis',width:'450px'}}>{record.moTa}</div>
              ),
            },
            {
              title: 'Giá vé',
              dataIndex: 'maNhom',
              key: 'manhom',
            },
            {
              title: 'Thời lượng phim',
              dataIndex: 'ngayKhoiChieu',
              key: 'ngaykhoichieu',
            },
            {
              title: 'Thao Tác',
              key: 'action',
              render: (text, record) => (            
                <span>
                  <a onClick={() => {this.props.xoaPhim(record.maPhim)}}>
                    <img style={{width:'30px'}} src="../assets/images/garbage.svg" alt=""/>
                  </a>
                </span>
              ),
            },
          ]; 
          const data = this.props.danhSachPhim;
          const { RangePicker } = DatePicker;
          
        return (
            <Fragment>
                <h3 className="text-center">Phim: {this.props.tenPhim}</h3>
                <hr/>
                <Form onSubmit={this.handleSubmit}>
                    <div className={styles.lichChieuAdmin}>
                  <div className='row'>
                    <div className="col-md-6">
                    <Form.Item>
                <Select name='danhMuc' placeholder="Chọn hệ thống rạp" style={{ width: 200 }}>
                  {this.props.dMucRap.map((dMuc,index) =>{
                    return(
                      <Option onClick={()=>this.props.layThongTinCumRap(dMuc.maHeThongRap)} key={index} value={dMuc.maHeThongRap}>{dMuc.maHeThongRap}</Option>
                    )
                  })}
                </Select>
                </Form.Item>

                <Form.Item style={{width:'300px'}}>
                <Select name='cumRap' placeholder="Chọn cụm rạp" style={{ width: 320 }} onChange={this.handleChange}>
                {this.props.cumRap.map((cumRap,index) =>{
                    return(
                      <Option onClick={()=>this.renderRap(cumRap.danhSachRap)} key={index} value={cumRap.tenCumRap}>{cumRap.tenCumRap}</Option>
                    )
                  })}
                </Select>
                </Form.Item>

                <Form.Item>
                <Select name='maRap' placeholder="Chọn rạp" style={{ width: 150 }} onChange={this.handleChangemaRap}>
                {this.state.dsRap.map((rap,index) =>{
                    return(
                      <Option key={index} value={rap.maRap}>{rap.maRap}</Option>
                    )
                  })}
                </Select>
                </Form.Item>
                    </div>
                    <div className="col-md-6 text-right">
                    <Form.Item>
                <span style={{paddingRight:'70px'}}>Nhập giá vé: </span>            
                <InputNumber name='giaVe' min={50000} step={5000}	max={300000} defaultValue={70000} onChange={this.handleChangeGiaVe} />
                </Form.Item>

                <Form.Item>
                <span>Nhập thời lượng phim: </span>            
                <InputNumber min={30} step={10}	max={200} defaultValue={90}  />
                </Form.Item>

              <Form.Item>
              <DatePicker
              style={{ width: 259 }}
                format="DD/MM/YYYY hh:mm:ss"
                showTime
                placeholder="Nhập ngày giờ chiếu"
                onChange={this.onChange}
                onOk={this.onOk}
              />
              </Form.Item>
                    </div>
                  </div>
                  </div>

            

                <div>
                <Table style={{width: '1000px'}} columns={columns} bordered='true'  dataSource={data} pagination={{defaultCurrent:1, pageSize: 5}} /> 
                </div>

                <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button className={styles.submit} type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        </Form>
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
  dMucRap: state.QuanLyRapReducer.dMucRap,
  cumRap: state.QuanLyRapReducer.cumRap
})

const mapDispatchToProps = dispatch =>{
  return {
    taoLichChieu:(lichChieu) => dispatch(taoLichChieuAction(lichChieu)),
    layDanhMucRap:() => dispatch(layDanhMucRap()),
    layThongTinCumRap:(maHeThongRap) => dispatch(layThongTinCumRap(maHeThongRap))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ThongTinLichChieuAdmin);