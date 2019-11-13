import React, { Component,Fragment } from 'react'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import DetailMovie from '../../DetailMovie/DetailMovie'

export default class ChiTietPhimPage extends Component {
    render() {
        return (
            <Fragment>
<Header/>
<DetailMovie/>

                          <Footer/>

            </Fragment>
        )
    }
}
