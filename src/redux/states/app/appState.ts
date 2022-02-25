import BaseState from "../../../core/states/baseState";

interface AppState extends BaseState {
    selectedSideBarItem : string[]
}

export default AppState