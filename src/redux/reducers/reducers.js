import { ActionTypes } from "../constants/action_types";
const initialState = {
  showSendAlert: false,
  showSettings: false,
  showHelp: false,
  showNotes: false,
  showFind: false,
  showIssues: false,
  showDemo: false,
  showFiles: false,
  selectedFeed:"",
  newCase:"",
  words:"",
  annotationList:[],
  annotationUpdate:false
};

export const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SHOW_SEND_ALERT:
      return { ...state, showSendAlert: payload };
    case ActionTypes.SHOW_SETTINGS:
      return { ...state, showSettings: payload };
    case ActionTypes.SHOW_HELP:
      return { ...state, showHelp: payload };
    case ActionTypes.SHOW_NOTES:
      return { ...state, showNotes: payload };
    case ActionTypes.SHOW_FIND:
      return { ...state, showFind: payload };
    case ActionTypes.SHOW_ISSUES:
      return { ...state, showIssues: payload };
    case ActionTypes.SHOW_DEMO:
      return { ...state, showDemo: payload };
    case ActionTypes.SHOW_FILES:
      return { ...state, showFiles: payload };
    case ActionTypes.SHOW_ACTIVE_FEED:
      return { ...state, showActiveFeed: payload };
    case ActionTypes.LOAD_SHOW_DEMO_FEED:
      return { ...state, loadShowDemoFeed: payload };
    case ActionTypes.SHOW_CONNECT:
      return { ...state, showConnect: payload };
    case ActionTypes.SHOW_DELETE:
      return { ...state, showDelete: payload };
    case ActionTypes.SHOW_SEND_MESSAGE:
      return { ...state, showSendMessage: payload };
      case ActionTypes.SELECTED_FEED:
      return { ...state, selectedFeed: payload };
      case ActionTypes.NEW_CASE:
        return { ...state, newCase: payload };
        case ActionTypes.ANNOTATION:
        return { ...state, annotation: payload };
        case ActionTypes.AUTO_SPLIT:
          return { ...state, autoSplit: payload };
          case ActionTypes.ENABLE_DEMO:
            return { ...state, enableDemo: payload };
            case ActionTypes.ENABLE_FILES:
              return { ...state, enableFiles: payload };
              case ActionTypes.ENABLE_FIND:
      return { ...state, enableFind: payload };
      case ActionTypes.ENABLE_HELP:
      return { ...state, enableHelp: payload };
      case ActionTypes.ENABLE_INDEX:
      return { ...state, enableIndex: payload };
      case ActionTypes.ENABLE_ISSUES:
      return { ...state, enableIssues: payload };
      case ActionTypes.ENABLE_KEYWORD:
      return { ...state, enableKeyword: payload };
      case ActionTypes.ENABLE_REMOTE:
      return { ...state, enableRemote: payload };
      case ActionTypes.ENABLE_SEND:
      return { ...state, enableSend: payload };
      case ActionTypes.ENABLE_SETTINGS:
      return { ...state, enableSettings: payload };
      case ActionTypes.ENABLE_SIDEBAR:
      return { ...state, enableSidebar: payload };
      case ActionTypes.ENABLE_VERBOSE:
      return { ...state, enableVerbose: payload };
      case ActionTypes.PAGE_NO:
      return { ...state, pageNo: payload };
      case ActionTypes.TIME_CODE:
      return { ...state, timeCode: payload };
      case ActionTypes.ENABLE_ZOOM:
        return { ...state, enableZoom : payload };
        case ActionTypes.WORDS:
          return { ...state, words : payload };
          case ActionTypes.ANNOTATION_LIST:
             
            return { ...state, 
              annotationList : state.annotationList.includes(payload)?
              state.annotationList.filter((obj)=>obj!==payload):
              payload!==""?[...state.annotationList,payload] :[]};
            case ActionTypes.ANNOTATION_UPDATED:
            return { ...state, annotationUpdated : payload };
    default:
      return state;
  }
};
