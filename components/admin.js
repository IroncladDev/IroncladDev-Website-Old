import { Component } from 'react';
import styles from '../styles/Admin.module.css';
import Li from './li';
import Swal from 'sweetalert2';
import classes from '../styles/classes.module.css';
import PRow from './prow'


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

class Waits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.editRow = this.editRow.bind(this);
  }
  componentDidMount() {
    this.setState({
      data: this.props.data
    })
  }
  editRow(row) {
    const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
    let comp = this;
    Swal.fire({
      title: "Edit " + row,
      text: "\n\nSet Row Status As",
      showCancelButton: true,
      cancelButtonText: "Waiting",
      confirmButtonText: "In Progress",
      denyButtonText: "Complete",
      showDenyButton: true,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        fetch("/api/mark", {
          headers: {
            "Content-Type": "application/json",
            "Accept": "*/*"
          },
          method: "POST",
          body: JSON.stringify({
            type: "progress",
            slug: row,
            auth: cookie("admin")
          })
        }).then(r => r.json()).then(data => {
          if (data.success) {
            comp.setState({
              data: data.data
            })
            Toast.fire({
              icon: "success",
              title: "Success!"
            })
          } else {
            Toast.fire({
              icon: "error",
              title: "Failed",
              text: data.message
            })
          }
        })
      } else if (result.isDenied) {
        Swal.fire({
          title: "Complete and Delete?",
          text: "Are you sure you want to complete this?  It will be removed from the database.",
          showCancelButton: true,
          preConfirm: () => {
            fetch("/api/mark", {
              headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
              },
              method: "POST",
              body: JSON.stringify({
                type: "delete",
                slug: row,
                auth: cookie("admin")
              })
            }).then(r => r.json()).then(data => {
              if (data.success) {
                comp.setState({
                  data: data.data
                })
                Toast.fire({
                  icon: "success",
                  title: "Deleted!"
                })
              } else {
                Toast.fire({
                  icon: "error",
                  title: "Failed",
                  text: data.message
                })
              }
            })
          }
        })
      } else {
        fetch("/api/mark", {
          headers: {
            "Content-Type": "application/json",
            "Accept": "*/*"
          },
          method: "POST",
          body: JSON.stringify({
            type: "default",
            slug: row,
            auth: cookie("admin")
          })
        }).then(r => r.json()).then(data => {
          if (data.success) {
            comp.setState({
              data: data.data
            })
            Toast.fire({
              icon: "success",
              title: "Success!"
            })
          } else {
            Toast.fire({
              icon: "error",
              title: "Failed",
              text: data.message
            })
          }
        })
      }
    })
  }
  render() {
    return (
      <div className={styles.container + " " + classes.centerx} style={{ marginLeft: 20 }}>
        {this.state.data.map((x, i) => <Li key={x._id} name={x.user} _id={x._id} date={x.date} number={i + 1} status={x.status} editRow={this.editRow} />)}
      </div>
    )
  }
}

class ProjManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      data: this.props.data
    }
    this.getBase64 = this.getBase64.bind(this);
    this.addProj = this.addProj.bind(this);
    this.editProj = this.editProj.bind(this);
  }
  async addProj(e) {
    let self = this;
    e.preventDefault();
    const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
    let data = await fetch("/api/add-site", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "*/*"
      },
      method: "POST",
      body: JSON.stringify({
        auth: cookie("admin"),
        cover: this.state.image,
        title: e.target.title.value,
        desc: e.target.desc.value,
        link: e.target.link.value,
        pos: e.target.pos.value
      }, true)
    }).then(r => r.json())
    if (data.success) {
      self.setState({
        data: data.data
      })
      e.target.title.value = "";
      e.target.desc.value = "";
      e.target.link.value = "";
      e.target.pos.value = "";
      e.target.image.value = "";
    } else {
      Swal.fire("Failed", data.message, "error")
    }

  }
  getBase64(e) {
    Swal.fire("Loading...", "", "info")
    var reader = new FileReader();
    var file = e.target.files[0];
    let rbs4 = "";
    let self = this;
    reader.onload = async function (upload) {
      let imageUrl = await fetch("https://replqapi.ironcladdev.repl.co/upload-image", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: upload.target.result
        })
      }).then(r => r.json())
      await self.setState({
        image: imageUrl.image
      }, () => {
        Swal.fire("Upload Complete", "", "success")
      })
    };
    reader.readAsDataURL(file);
    return rbs4;
  }
  async editProj(e) {
    let self = this;
    const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
    const { value: formValues } = await Swal.fire({
      title: 'Edit Project ' + e,
      html:
        '<input id="swal-input1" placeholder="title or [DELETE]" class="' + classes.input + '" style="display:block;width:80%;margin:10px auto;" autocomplete="off">' +
        '<textarea id="swal-input2" placeholder="description" class="' + classes.input + '" style="display:block;width:80%;margin:10px auto;"></textarea>' +
        '<input id="swal-input3" placeholder="position number" type="number" class="' + classes.input + '" style="display:block;width:80%;margin:10px auto;" autocomplete="off"/>',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
          document.getElementById('swal-input3').value
        ]
      },
    })

    if (formValues) {
      console.log(formValues, e)
      fetch("/api/editproj", {
        headers: {
          "Content-Type": "application/json",
          "Accept": "*/*"
        },
        method: "POST",
        body: JSON.stringify({
          auth: cookie("admin"),
          title: formValues[0],
          desc: formValues[1],
          posval: formValues[2],
          slug: e
        })
      }).then(r => r.json()).then(data => {
        if (data.success) {
          self.setState({
            data: data.data
          });
          Swal.fire('Success!', data.message, "success");
        } else {
          Swal.fire("Failed", data.message, "error");
        }
      })
    }
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.projCont}>

          <div className={styles.projAdd + " " + classes.centerx}>
            <form onSubmit={this.addProj} className={styles.addForm}>
              <h1 className={classes.textCenter}>Add Site</h1>
              <input className={classes.input} placeholder="Title" name="title" autoComplete="off" required={true} />
              <textarea placeholder="description" className={classes.input} name="desc" autoComplete="off" required={true}></textarea>
              <input className={classes.input} placeholder="URL" name="link" type="url" autoComplete="off" required={true} />
              <input className={classes.darkBtn} onChange={this.getBase64} name="image" type="file" placeholder="Image URL" accept="image/*" required={true} />
              <input name="pos" className={classes.input} type="number" max="1000" autoComplete="off" placeholder="position (leave blank for 0)" />
              <input className={classes.darkBtn} type="submit" />
            </form>
          </div>

          <div style={{ background: 'transparent' }}>
            {this.state.data.map(x => <PRow _id={x._id} edit={this.editProj} key={x._id} title={x.title} desc={x.desc} postval={""} />)}
          </div>

        </div>
      </div>
    )
  }
}

class GenPay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      switch: "pre"
    }
    this.change = this.change.bind(this);
    this.switchType = this.switchType.bind(this);
    this.copyVal = this.copyVal.bind(this);
  }
  encodeValue(v) {
    return btoa(v.toString().split``.map(e => e.charCodeAt(0)).join`-`)
  }
  change(e) {
    this.setState({
      value: Number(e.target.value)
    })
  }
  switchType(e) {
    this.setState({
      switch: e.target.value
    })
  }
  copyVal() {
    navigator.clipboard.writeText("https://payment.connerow.dev/" + this.state.switch + "?amtval=" + this.encodeValue(this.encodeValue(this.state.value)));
    Toast.fire({
      icon: "success",
      title: "Copied"
    })
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.payGen}>
          <input className={classes.input} placeholder="Amount" type="number" value={this.state.value} onChange={this.change} />
          <select className={classes.darkBtn} onChange={this.switchType} value={this.state.switch}>
            <option value="pre">Pre-Payment</option>
            <option value="final">Final Payment</option>
          </select>
          <button className={classes.darkBtn} onClick={this.copyVal}>Generate</button>
        </div>
      </div>
    )
  }
}

class Bloog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }
  postEm(e) {
    e.preventDefault();
    const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "*/*"
      },
      body: JSON.stringify({
        title: e.target.title.value,
        body: e.target.body.value,
        auth: cookie("admin")
      })
    }).then(r => r.json()).then(data => {
      if (data.success) {
        Toast.fire({
          icon: "success",
          title: "Success"
        })
      } else {
        Toast.fire({
          icon: "error",
          title: "Failed",
          text: data.error
        })
        console.log(data.error)
      }
    })
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.projCont}>

          <div className={styles.projAdd + " " + classes.centerx}>
            <form onSubmit={this.postEm} className={styles.addForm}>
              <h1 className={classes.textCenter}>Message Subscribers</h1>
              <input className={classes.input} name="title" placeholder="Email Title" />
              <textarea name="body" className={classes.input} rows="6" placeholder="Body (HTML Supported)"></textarea>
              <button className={classes.darkBtn} type="submit">Send</button>
            </form>
          </div>

          {this.props.data.map((x, i) => <PRow _id={x._id} edit={() => { }} key={x._id} title={i} desc={x.email} />)}


        </div>
      </div>
    );
  }
}

class Tab extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.tab + " " + (this.props.tab === this.props.num && styles.tabSelected)} onClick={() => this.props.switch(this.props.num)}>{this.props.name}</div>
    )
  }
}
class Tabs extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.tabs + " " + classes.centerx}>
        <Tab tab={this.props.tab} switch={this.props.switch} name="Waitlist" num={0} />
        <Tab tab={this.props.tab} switch={this.props.switch} name="Projects" num={1} />
        <Tab tab={this.props.tab} switch={this.props.switch} name="Payment" num={2} />
        <Tab tab={this.props.tab} switch={this.props.switch} name="Emailing" num={3} />
      </div>
    )
  }
}

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0
    }
    this.switchTab = this.switchTab.bind(this);
  }
  switchTab(tb) {
    this.setState({
      tab: tb
    })
  }
  render() {
    return (
      <div>
        <Tabs switch={this.switchTab} tab={this.state.tab} />
        {this.state.tab === 0 && <Waits data={JSON.parse(this.props.waits)} />}
        {this.state.tab === 1 && <ProjManage data={JSON.parse(this.props.sites)} />}
        {this.state.tab === 2 && <GenPay />}
        {this.state.tab === 3 && <Bloog data={JSON.parse(this.props.subs)} />}



      </div>
    )
  }
}