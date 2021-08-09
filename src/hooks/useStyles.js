import {makeStyles} from "@material-ui/core/styles";
import {COLORS} from "../colors";

const useStyles = makeStyles((theme) => ({
  main_content: {
    margin: theme.spacing(8),
    flexGrow: 1
  },

  side_by_side: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'center',
    alignContent: 'space-around',
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

  button_dark_text: {
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