/*
export function someAction (context) {
}
*/

import { api } from '../../boot/axios';

/**
 * Consulta os dados na api e carrega no state treino
 * @param {} param0 
 * @returns 
 */
export function listar({commit}) {
    return api.get("/treinos/").then(r => {
        commit("setTreinos", r.data);
    });
}
export function dia({commit}) {
    return api.get("/treinos/dia").then(r => {
        commit("setDia", r.data);
    });
}

/**
 * Consulta a categoria do id
 * @param {*} param0 
 * @param {*} id 
 */
export function carregar({state, commit}, id) {
    var treino = state.treinos.filter(g => g.id == id)[0];
    commit('setTreino', treino);
}

export function inserir({commit, dispatch}, form) {
    return api.post('/treinos/', form).then(r => {
        commit('setTreino', r.data);
        return dispatch('listar');
    })

}

export function alterar({commit,dispatch}, form) {
    return api.patch(`/treinos/${form.id}/`, form).then(r => {
        commit('setTreino', r.data);
        return dispatch('listar');
    })
}
