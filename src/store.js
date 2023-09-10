import { writable } from 'svelte/store';
import { browser } from "$app/environment";

const getInitialUserInfo = () => {
    const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
    // ADD method to verify validity of token !
    // Complicated because async function > no risk because no modification possible if token corrupted
    return userInfo;
};

const getInitialCopyComponent = () => {
    const copyComponent = localStorage.getItem('copyComponent') ? JSON.parse(localStorage.getItem('copyComponent')) : null;
    return copyComponent;
};

export const city = writable('Paris');

export const userInfo = writable(browser ? getInitialUserInfo() : '');

export const pageRequest = writable({content:{content:[], name:''}, loading: false, message: ''});

export const pageName = writable('homePage');

export const articleRequest = writable({article:null, loading:false, message:''});
export const articleUpdateRequest = writable({success:false, loading:false, message:''});
export const articleAllRequest = writable({articles:null, loading:false, message:''});
export const articleCreateRequest = writable({success:false, loading:false, message:''});
export const articleDeleteRequest = writable({success:false, loading:false, message:''});

export const filmRequest = writable({film:null, loading:false, message:''});
export const filmUpdateRequest = writable({success:false, loading:false, message:''});
export const filmAllRequest = writable({films:null, loading:false, message:''});
export const filmCreateRequest = writable({success:false, loading:false, message:''});
export const filmDeleteRequest = writable({success:false, loading:false, message:''});

export const statisticsSendRequest = writable({success:false, loading:false, message:'', data:{}});
export const statisticsAllPages = writable({success:false, loading:false, message:'', pages:[], application: {}});

export const copyComponent = writable(browser ? getInitialCopyComponent() : null);