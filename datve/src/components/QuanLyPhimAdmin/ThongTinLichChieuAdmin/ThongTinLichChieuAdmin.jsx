import React, { Component,Fragment } from 'react'
import { Select } from 'antd';
import { Table, Divider } from 'antd';
import { Form,Input,InputNumber,Button   } from 'antd';
import { DatePicker } from "antd";

export default class ThongTinLichChieuAdmin extends Component {

 handleChange=(value)=> {
  console.log(`selected ${value}`);
}
 onChange=(value, dateString) => {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
}

 onOk=(value)=> {
  console.log("onOk: ", value);
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
                <h3 className="text-center">Phim: The Flash</h3>
                <hr/>

                <Form.Item>
                <Select placeholder="Chọn hệ thống rạp" style={{ width: 150 }} onChange={this.handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                </Select>
                </Form.Item>

                <Form.Item>
                <Select placeholder="Chọn cụm rạp" style={{ width: 150 }} onChange={this.handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                </Select>
                </Form.Item>

                <Form.Item>
                <Select placeholder="Chọn rạp" style={{ width: 150 }} onChange={this.handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                </Select>
                </Form.Item>

                <Form.Item>
                <span>Nhập giá vé: </span>            
                <InputNumber min={50000} step={5000}	max={300000} defaultValue={70000} onChange={this.handleChange} />
                </Form.Item>

                <Form.Item>
                <span>Nhập thời lượng phim: </span>            
                <InputNumber min={30} step={10}	max={200} defaultValue={90} onChange={this.handleChange} />
                </Form.Item>

                
               
              <Form.Item>
              <DatePicker
                format="DD/MM/YYYY hh:mm:ss"
                showTime
                placeholder="Nhập ngày giờ chiếu"
                onChange={this.onChange}
                onOk={this.onOk}
              />
              </Form.Item>

                <div>
                <Table style={{width: '1000px'}} columns={columns} bordered='true'  dataSource={data} pagination={{defaultCurrent:1, pageSize: 5}} /> 
                </div>

                <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>

            </Fragment>
        )
    }
}
