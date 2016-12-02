import { observable, extendObservable } from 'mobx'

export default class AppStore {
  @observable polls = []
  @observable poll = {}
}
