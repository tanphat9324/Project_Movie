import React, { Component,Fragment } from 'react'
import styles from './FooterAdmin.module.css'

export default class FooterAdmin extends Component {
    render() {
        return (
            <Fragment>
                 <footer className={styles.footerDashBoard}>
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright © 123phim Website 2019</span>
          </div>
        </div>
      </footer>
            </Fragment>
        )
    }
}
