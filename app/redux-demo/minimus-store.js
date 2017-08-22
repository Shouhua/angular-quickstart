var Store = (function () {
    function Store(reducer, initialState) {
        this.reducer = reducer;
        this._state = initialState;
    }
    Store.prototype.getState = function () {
        return this._state;
    };
    Store.prototype.dispatch = function (action) {
        this._state = this.reducer(this._state, action);
    };
    return Store;
}());
//# sourceMappingURL=minimus-store.js.map