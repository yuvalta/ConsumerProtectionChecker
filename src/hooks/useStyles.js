import {makeStyles} from "@material-ui/core/styles";
import {COLORS} from "../colors";

const useStyles = makeStyles((theme) => ({
  main_content: {
    margin: theme.spacing(8),
    flexGrow: 1
  },

  main_content_margin_left_right: {
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(-1),
    flexGrow: 1
  },

  side_by_side: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },

  text: {
    direction: 'rtl',
    fontFamily: 'Ariel',
    margin: theme.spacing(2),
    textAlign: 'right',
    flexGrow: 1,
    color: COLORS.black
  },

  center: {
    marginTop: theme.spacing(15),
  },

  root_disabled: {
    margin: theme.spacing(5),
    flexGrow: 1,
    pointerEvents: "none",
    opacity: "0.7"
  },

  button_red_gradient: {
    margin: theme.spacing(2),
    variant: 'contained',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: '50px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },

  button_blue_gradient: {
    margin: theme.spacing(2),
    variant: 'contained',
    background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: '50px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },

  simple_button: {
    margin: theme.spacing(2),
    size: 'medium',
    borderRadius: '50px',
    padding: '0 30px',
    height: 48,
  },

  root: {
    background: 'transparent',
    flexGrow: 1,
    direction: 'rtl',
    boxShadow: 'none'
  },

  buttons_header: {
    paddingTop: theme.spacing(2),
    alignItems: 'center',
    background: 'transparent',
    flexGrow: 1,
    direction: 'rtl',
    boxShadow: 'none'
  },

  title: {
    variant: 'h5',
    flexGrow: 1,
    color: COLORS.dark_gray
  },

  searchbar: {
    flexGrow: 1,
    margin: theme.spacing(2),
    borderRadius: 20 ,
  },

  bottomToast: {
    direction: 'rtl',
  },

  button_dark_text: {
    variant: 'h3',
    flexGrow: 1,
    color: COLORS.black
  },

  button_light_text: {
    variant: 'h6',
    flexGrow: 1,
    color: COLORS.dirty_white
  },
}));

export default useStyles;