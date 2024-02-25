import { createSlice } from "@reduxjs/toolkit";
const initValue={
    songs:[]
}

const SongsSlice=createSlice({
    name:"song",
    initialState:initValue,
    reducers:{
    getAll:(state,actions)=>{
    state.songs=actions.payload.res
    },addSong:(state,actions)=>{
        state.songs=[...state.songs,actions.payload.song]

     },deleteSong:(state,actions)=>{
        state.songs=state.songs.filter( p=> p.id !=actions.payload.id)

     }
    //  editPost:(state,actions)=>{
    //     state.songs.map((p)=>{
    //         if(p.id==actions.payload.id){
    //             p.content=actions.payload.content
    //             p.like=actions.payload.like
    //         }
    //     })
    //  }
    }
})
export const {addSong,deleteSong,getAll}=SongsSlice.actions
export default SongsSlice.reducer