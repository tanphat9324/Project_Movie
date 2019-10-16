import {makeStyles} from "@material-ui/core";
import { NONAME } from "dns";
import { node } from "prop-types";
const useStyle = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
      },
      tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
      },
      listCinema:{
          width:'100%',
        "& img":{
            width: "50px",
        }
      },
      info_movie_item:{
        width: "50%",
        margin:"0 auto",
      },
      brand_movie:{
        width: '10%',
        border: '1px solid #ebebec',
        borderTopLeftRadius:'4px',
        borderBottomLeftRadius:'4px',
        // min-height: '705px',
        minHeight:'705px'
      },
      customBtn:{
          padding:'20px',
        //   backgroundColor:'white',
         '&:focus':{
            boxShadow:'none',
          }
      }
}));

export default useStyle;