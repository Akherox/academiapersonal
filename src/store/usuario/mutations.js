/*
export function someMutation (state) {
}
*/

import { api } from "boot/axios";

export function setToken(state, token) {
    state.token = token;

    if (token) {
        state.logado = true;
        api.defaults.headers['Authorization'] = 'JWT ' + token;
    }
    else {
        state.logado = false;
        state.usuario = null;
        api.defaults.headers['Authorization'] = '';
    }
}

export function setUsuario(state, usuario) {
    state.usuario = usuario;
}