import{z as a}from"./index-a374ad1e.js";a.defaults.baseURL="https://drink-master-server.onrender.com";async function l(e){try{console.log("axios",a);const{data:r}=await a.get(`/drinks/${e}`);return r}catch(r){console.log(r.message)}}async function g(){try{return(await a.get("/drinks/mainpage")).data}catch(e){return thunkAPI.rejectWithValue(e.message)}}async function u(e,r,n,o="1",c="10"){let t="/drinks/search?";e&&(t=t+"keyword="+e+"&"),r&&(t=t+"category="+r+"&"),n&&(t=t+"ingredient="+n+"&"),o&&(t=t+"page="+o+"&"),c&&(t=t+"per_page="+c),console.log(t);try{a.defaults.params;const{data:s}=await a.get(t);return s}catch(s){return thunkAPI.rejectWithValue(s.message)}}export{u as a,l as b,g};
