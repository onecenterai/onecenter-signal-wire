import { configureStore } from "@reduxjs/toolkit";
import WaitListSlice from "./slices/WaitListSlice";
import GetReviewsSlice from "./slices/GetReviewsSlice";
import AuthSlice from "./slices/AuthSlice";
import UploadSlice from "./slices/UploadSlice";
import PostManualSlice from "./slices/PostManualSlice";
import AgentsSlice from "./slices/AgentsSlice";
import PartnerSlice from "./slices/PartnerSlice";
import ActionsSlice from "./slices/ActionsSlice";

export const store = configureStore({
  reducer: {
    WaitList: WaitListSlice,
    Reviews: GetReviewsSlice,
    Upload: UploadSlice,
    Auth: AuthSlice,
    Manuals: PostManualSlice,
    Agents: AgentsSlice,
    Partners: PartnerSlice,
    Actions: ActionsSlice,
  },
});
export type AppDispatch = typeof store.dispatch;
