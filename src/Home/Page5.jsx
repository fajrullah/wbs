import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Row, Col } from 'antd';
import { Button, IconButton, FormControl, InputLabel, OutlinedInput, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ReCAPTCHA from "react-google-recaptcha";
import { SendOutlined } from '@ant-design/icons';
const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));


export default function Page5() {
  const classes = useStyles();

  const onChange = (values) => {
    console.log(values);
  };


  return (
    <OverPack component="section" className="page-wrapper page5 text-center">
      <QueueAnim
        type="bottom"
        leaveReverse
        className="page"
        key="a"
      >
        <h2 key="h2">Hubungi Kami</h2>
        <span className="separator" key="span" />
        <Row id="page5">
          <Col key="singleColumn1" md={4} xs={24} />
          <Col key="singleColumn2" md={16} xs={24} className="card-wrapper">
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment">* Wajib diisi</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment"
                    onChange={onChange('amount')}
                    startAdornment={<InputAdornment position="start">Nama Anda : </InputAdornment>}
                    labelWidth={80}
                  />
                </FormControl>
              </div>
              <br />
              <div>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment">* Wajib diisi</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment"
                    onChange={onChange('amount')}
                    startAdornment={<InputAdornment position="start">Email Anda : </InputAdornment>}
                    labelWidth={80}
                  />
                </FormControl>
              </div>
              <br />
              <div>
                <FormControl fullWidth className={classes.margin} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment">* Wajib diisi</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment"
                    onChange={onChange('amount')}
                    startAdornment={<InputAdornment position="start">Isi : </InputAdornment>}
                    labelWidth={80}
                    multiline
                    rows={5}
                  />
                </FormControl>
              </div>
              <br />
              <div>
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChange}
              />
              </div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
              Kirim&nbsp;&nbsp;<SendOutlined />
            </Button>
            </form>
          </Col>
        </Row>
        
      </QueueAnim>
    </OverPack>
  );
}
