import { Component } from 'react';
import styles from '../styles/comps/pagetable.module.css'
import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


export default class PageRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.row}>
        <div className={styles.ptitle}>{this.props.title}</div>
        <div className={styles.pdesc}>{this.props.desc}</div>
        <div className={styles.closeBtn} onClick={() => {
          this.props.removePage(this.props.title);
          Toast.fire({
            title: "Page Deleted",
            icon: "success"
          })
        }}>X</div>
      </div>
    );
  }
}