import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import PropTypes from 'prop-types';
import { InputLabel, Input, OutlinedInput, InputAdornment } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Row, Col, Result } from 'antd';
import Checkbox from '@material-ui/core/Checkbox';
import { green } from '@material-ui/core/colors';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import ListAltIcon from '@material-ui/icons/ListAlt';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import DescriptionIcon from '@material-ui/icons/Description';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import leftPad from './assets/comments-leftpad-abd23.svg';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import ReCAPTCHA from "react-google-recaptcha";
const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);
const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  active: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  completed: {
    '& $line': {
      borderColor: '#784af4',
    },
  },
  line: {
    borderColor: '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <ListAltIcon />,
    2: <AssignmentIcon />,
    3: <GroupAddIcon />,
    4: <DescriptionIcon />,
    5: <PermIdentityIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Persetujuan', 'Detail Informasi', 'Pihak terlapor', 'Lampiran', 'Pelapor'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Persetujuan />;
    case 1:
      return <DetailInformasi />;
    case 2:
      return <PihakTerlapor />;
    case 3:
      return <Lampiran />;
    case 4:
      return <Pelapor />;
    default:
      return 'Unknown step';
  }
}
const Lampiran = () => (<div>
  <div>
    <Row gutter={16}>
      <Col key="page2Column1" md={4} xs={24}>
        <FormControl fullWidth variant="outlined">
          <Button variant="contained" color="primary">
            Tambah
          </Button>

        </FormControl>
      </Col>
    </Row>
    <br />
    <Row gutter={16}>
      <Col key="page2Column1" md={4} xs={24}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment">Opsional</InputLabel>
          <OutlinedInput
            id="outlined-adornment"
            onChange={() => console.log('aaa')}
            startAdornment={<InputAdornment position="start">Nama Dokumen: </InputAdornment>}
            labelWidth={80}
            multiline
          />
        </FormControl>
      </Col>
      <Col key="page2Column1" md={4} xs={24}>
        <FormControl fullWidth variant="outlined">
          <Input type="file"/>
        </FormControl>
      </Col>
      <Col key="page2Column4" md={4} xs={24}>
        <FormControl fullWidth variant="outlined">
          <Button variant="contained" color="secondary">
            X
          </Button>
        </FormControl>
      </Col>
    </Row>
  </div>
</div>);
const PihakTerlapor = () => (<div>
  <div>
    <Row gutter={16}>
      <Col key="page2Column1" md={4} xs={24}>
        <FormControl fullWidth variant="outlined">
          <Button variant="contained" color="primary">
            Tambah
          </Button>

        </FormControl>
      </Col>
    </Row>
    <br />
    <Row gutter={16}>
      <Col key="page2Column1" md={4} xs={24}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment">* Wajib diisi</InputLabel>
          <OutlinedInput
            id="outlined-adornment"
            onChange={() => console.log('aaa')}
            startAdornment={<InputAdornment position="start">Nama : </InputAdornment>}
            labelWidth={80}
            multiline
          />
        </FormControl>
      </Col>
      <Col key="page2Column1" md={4} xs={24}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment">opsional</InputLabel>
          <OutlinedInput
            id="outlined-adornment"
            onChange={() => console.log('aaa')}
            startAdornment={<InputAdornment position="start">NIP : </InputAdornment>}
            labelWidth={80}
            multiline
          />
        </FormControl>
      </Col>
      <Col key="page2Column3" md={4} xs={24}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment">opsional</InputLabel>
          <OutlinedInput
            id="outlined-adornment"
            onChange={() => console.log('aaa')}
            startAdornment={<InputAdornment position="start">Jabatan : </InputAdornment>}
            labelWidth={80}
            multiline
          />
        </FormControl>
      </Col>
      <Col key="page2Column4" md={4} xs={24}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment">* Wajib diisi</InputLabel>
          <OutlinedInput
            id="outlined-adornment"
            onChange={() => console.log('aaa')}
            startAdornment={<InputAdornment position="start">Unit Kerja : </InputAdornment>}
            labelWidth={80}
            multiline
          />
        </FormControl>
      </Col>
      <Col key="page2Column4" md={4} xs={24}>
        <FormControl fullWidth variant="outlined">
          <Button variant="contained" color="secondary">
            X
          </Button>
        </FormControl>
      </Col>
    </Row>
  </div>
</div>);
const Persetujuan = () => (<div>
  <div key="comment" className="comment">
    <img src={leftPad} alt="" />
    <span>
      Dengan ini saya sebagai whistleblower Kota Bekasi,
      melakukan pelaporan pada whistleblowing system dengan memberikan keterangan sebenar-benarnya, tanpa tekanan dari pihak manapun, tidak ada unsur menipu ataupun niatan memberikan keterangan palsu, bersedia memantau perkembangan pengaduan yang saya lakukan dan melakukan komunikasi dengan tim pengelola whistleblowing system apabila diperlukan.
    </span>
  </div>
  <br />
  <b>
    <FormLabel component="legend"><strong>Persetujuan</strong></FormLabel>
    <FormControlLabel
      control={<GreenCheckbox size="large" name="checkedG" />}
      label="Saya mengerti dan setuju dengan penjelasan di atas."
    />
  </b></div>);
const DetailInformasi = () => (<div>
  <div>
    <Row>
      <Col key="page2Column1" md={4} xs={24}>
        <FormControl component="fieldset">
          <FormLabel component="legend">PNS / Non PNS</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value="PNS" onChange={() => console.log('aaa')}>
            <FormControlLabel value="PNS" control={<Radio />} label="PNS" />
            <FormControlLabel value="Non PNS" control={<Radio />} label="Non PNS" />
          </RadioGroup>
        </FormControl>
      </Col>
      <Col key="page2Column2" md={4} xs={24}>
        <FormControl component="fieldset">
          <FormLabel component="legend">WBS / Non WBS</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" value="WBS" onChange={() => console.log('aaa')}>
            <FormControlLabel value="WBS" control={<Radio />} label="WBS" />
            <FormControlLabel value="Non WBS" control={<Radio />} label="Non WBS" />
          </RadioGroup>
        </FormControl>
      </Col>
    </Row>
  </div>
  <br />
  <div>
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-adornment">* Wajib diisi</InputLabel>
      <OutlinedInput
        id="outlined-adornment"
        onChange={() => console.log('aaa')}
        startAdornment={<InputAdornment position="start">Topik laporan : </InputAdornment>}
        labelWidth={80}
        multiline
      />
    </FormControl>
  </div>
  <br />
  <div>
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-adornment">* Wajib diisi</InputLabel>
      <OutlinedInput
        id="outlined-adornment"
        onChange={() => console.log('aaa')}
        startAdornment={<InputAdornment position="start">Tempat Kejadian : </InputAdornment>}
        labelWidth={80}
        multiline
      />
    </FormControl>
  </div>
  <br />
  <div>
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-adornment">* Wajib diisi</InputLabel>
      <OutlinedInput
        id="outlined-adornment"
        onChange={() => console.log('aaa')}
        startAdornment={<InputAdornment position="start">Tanggal Kejadian : </InputAdornment>}
        labelWidth={80}
        multiline
      />
    </FormControl>
  </div>
  <br />
  <div>
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-adornment">* Wajib diisi</InputLabel>
      <OutlinedInput
        id="outlined-adornment"
        onChange={() => console.log('aaa')}
        startAdornment={<InputAdornment position="start">Uraian Kejadian : </InputAdornment>}
        labelWidth={80}
        multiline
        rows={5}
      />
    </FormControl>
  </div>
  <br />
  <div>
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-adornment">* Wajib diisi</InputLabel>
      <OutlinedInput
        id="outlined-adornment"
        onChange={() => console.log('aaa')}
        startAdornment={<InputAdornment position="start">Rp : </InputAdornment>}
        placeholder="Jumlah"
        labelWidth={80}
        multiline
      />
    </FormControl>
  </div>
                               </div>);

const Pelapor = () => (<div>
  <div>
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-adornment">* Wajib diisi</InputLabel>
      <OutlinedInput
        id="outlined-adornment"
        onChange={() => console.log('aaa')}
        startAdornment={<InputAdornment position="start">Nama : </InputAdornment>}
        labelWidth={80}
        multiline
      />
    </FormControl>
  </div>
  <br />
  <div>
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-adornment">* Wajib diisi</InputLabel>
      <OutlinedInput
        id="outlined-adornment"
        onChange={() => console.log('aaa')}
        startAdornment={<InputAdornment position="start">Alamat : </InputAdornment>}
        labelWidth={80}
        multiline
        rows={5}
      />
    </FormControl>
  </div>
  <br />
  <div>
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor="outlined-adornment">* Wajib diisi</InputLabel>
      <OutlinedInput
        id="outlined-adornment"
        onChange={() => console.log('aaa')}
        startAdornment={<InputAdornment position="start">No Tlpn : </InputAdornment>}
        placeholder="081122334455"
        labelWidth={80}
        multiline
      />
    </FormControl>
  </div>
  <br/>
  <div>
  <ReCAPTCHA
    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    onChange={(test) => console.log(test)}
  />
  </div></div>);

export default function Page2(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    <OverPack component="section" className="page-wrapper page2">
      <QueueAnim
        type="bottom"
        className="page text-center"
        leaveReverse
        key="page"
      >
        <h2 id="page2" key="title">WHISTLE BLOWING SYSTEM</h2>
        <span key="line" className="separator" />
        <QueueAnim type="bottom" className="info-content" key="content">
          <div className={classes.root}>
            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                </Step>
            ))}
            </Stepper>
            <div>
              {activeStep === steps.length ? (
                <div>
                  <Typography className={classes.instructions}>
                    
                    <Result
                      status="success"
                      title="Berhasil mengiririmkan data ke sistem."
                      subTitle="Hak perlindungan berupa kerahasiaan identitas, mendapat perlindungan dari tindakan administratif kepegawaian, perlindungan atas hak-hak saksi dan pelapor sebagaimana diatur dalam ketentuan peraturan perundang-undangan."
                      extra={[
                        <Button variant="contained" color="primary">
                          Kembali
                        </Button>,
                        ' Telah selesai semua langkah !'
                      ]}
                    />
                   
                  </Typography>
                  {/* <Button onClick={handleReset} className={classes.button}>
                    Reset
                  </Button> */}
                </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
            </div>
          </div>

        </QueueAnim>
      </QueueAnim>
    </OverPack>);
}
