import { combineReducers } from "redux";
import { pizzahutreducer } from "../redux/Pizzahut/pizzahut.reducer";
import { messageCardReducer, messageFeaturekey } from "./messageCard/messageCard.reducer";
import { registerFeaturekey, registerReducer } from "./Register/register.reducer";
import { hobbySelectorFeatureKey, hobbySelectorReducer } from "./HobbySelector/hobbySelector.reducer";
import { hobbySelectorRadioFeatureKey, hobbySelectorRadioReducer } from "./HobbySelectorRadio/hobbySelectorRadio.reducer";

let rootReducer = combineReducers({
    pizza : pizzahutreducer,
    [messageFeaturekey] : messageCardReducer,
    [registerFeaturekey] : registerReducer,
    [hobbySelectorFeatureKey] : hobbySelectorReducer,
    [hobbySelectorRadioFeatureKey] : hobbySelectorRadioReducer
});

export {rootReducer};