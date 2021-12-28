// import Vue from 'vue'
// import Vuex from 'vuex'
// import WebSocketInstance from '../websocket'
// import axios from 'axios'

// Vue.use(Vuex);

// export const store = new Vuex.Store({
//     state: {
//       chats: [],
//       fetchedMessages: [],
//       newMessage: null
//     },
//     mutations: {
//       setMessagesEmpty (state) {
//         state.messages = []
//       },
//       setChats (state, payload) {
//         state.chats = payload
//       },
//       setFetchedMessages (state, payload) {
//         state.fetchedMessages = payload
//       },
//       setNewMessage (state, payload) {
//         state.newMessage = payload
//       }
//     },
//     actions: {
//       sendMessage (payload) {
//         let chatID = payload.chatID
//         const messageObject = {
//           from: payload.username,
//           content: payload.content,
//           chatId: chatID
//         };
//         WebSocketInstance.newChatMessage(messageObject);
//       },
  
//       createChat (payload) {
//         return new Promise((resolve, reject) => {
  
//           axios.post(`${"http://localhost:8002"}/chat`, {
//             band: payload.bandId,
//             participants: payload.participants
//           }).then(res => {
//             console.log('chat created: ', res.data)
//             resolve(res)
//           }).catch((ex)=>{
//             console.log(ex)
//             reject(ex)
//           })
//         })
//       },
  
//       loadChats ({commit}, payload) {
//         let username = (localStorage.getItem("user")).userid
//           axios({
//               method: 'GET',
//               url: `${"http://localhost:8002"}/chat`,
//               params: { username: username, band_id: payload}
//           })
//           .then((response) => {
//               commit('setChats', response.data)
//           })
//           .catch((ex) => {
//               console.log(ex);
              
//           })
//       }
//       // createChat ({commit}, payload) {
//       //   let newPostKey = firebase.database().ref().child('chats').push().key
//       //   let updates = {}
//       //   updates['/chats/' + newPostKey] = {name: payload.chatName}
//       //   firebase.database().ref().update(updates)
//       //   return new Promise((resolve, reject) => {
//       //     resolve(newPostKey)
//       //   })
//       // }
//     },
//     getters: {
//       messages (state) {
//         return state.messages
//       },
//       chats (state) {
//         return state.chats
//       },
//       chatUser (state, getters, rootState) {
//         return rootState.auth.user
//       },
//       fetchedMessages (state) {
//         return state.fetchedMessages
//       },
//       newMessage (state) {
//         return state.newMessage
//       }
//     }
// })