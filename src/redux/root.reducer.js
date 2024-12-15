import { combineReducers } from "redux";
import { pizzahutreducer } from "../redux/Pizzahut/pizzahut.reducer";
import { messageCardReducer, messageFeaturekey } from "./messageCard/messageCard.reducer";
import { registerFeaturekey, registerReducer } from "./Register/register.reducer";
import { hobbySelectorFeatureKey, hobbySelectorReducer } from "./HobbySelector/hobbySelector.reducer";
import { hobbySelectorRadioFeatureKey, hobbySelectorRadioReducer } from "./HobbySelectorRadio/hobbySelectorRadio.reducer";
import { userListFeatureKey, userListreducer } from "./UserList/userlist.reducer";
import { contactAppreducer, contactsListFeatureKey } from "./ContactApp/contactApp.reducer";
import { githubAppFeatureKey, githubAppReducer } from "./GithubApp/githubApp.reducer";

let rootReducer = combineReducers({
    pizza : pizzahutreducer,
    [messageFeaturekey] : messageCardReducer,
    [registerFeaturekey] : registerReducer,
    [hobbySelectorFeatureKey] : hobbySelectorReducer,
    [hobbySelectorRadioFeatureKey] : hobbySelectorRadioReducer,
    [userListFeatureKey] : userListreducer,
    [contactsListFeatureKey] : contactAppreducer,
    [githubAppFeatureKey] : githubAppReducer
});

export {rootReducer};