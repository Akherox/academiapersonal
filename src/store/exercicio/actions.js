/*
export function someAction (context) {
}
*/

import { api } from '../../boot/axios';


export function listar({commit}, options={}) {
    let params = '';
    if (options.s) {
        params = `s=${options.s}`;
    }
    return api.get(`/exercicios?${params}`).then(r => {
        commit("setExercicios", r.data);
    });
}

export function carregar({state, commit}, id) {
    commit('setExercicio', exercicio);
}

export function inserir({commit, dispatch}, form) {
    return api.post('/exercicios/', form).then(r => {
        commit('setExercicio', r.data);
        return dispatch('listar');
    })

}

export function alterar({commit,dispatch}, form) {
    return api.patch(`/exercicios/${form.id}/`, form).then(r => {
        commit('setExercicio', r.data);
        return dispatch('listar');
    })
}