/**
 * Represents in-memory cache collection.
 */
class MemoryCache {
    /**
     * Creates a anew in-memory cache collection.
     */
    constructor() {
        /**
         * @private
         */
        this._cacheMap = new Map();
    }
    /**
     * Returns an entry from the cache.
     * @param {String} key A unique identifier for the cache entry to get.
     * @returns {*} A reference to the cache entry that is identified by key, if the entry exists; otherwise, null.
     */
    get(key) {
        return this._cacheMap.get(key);
    }
    /**
     * Inserts a cache entry into the cache. 
     * If the specified entry does not exist in the cache, a new cache entry is inserted. 
     * If the specified entry already exists, its value is updated.
     * @param {String} key key A unique identifier for the cache entry.
     * @param {*} value The value to store in the cache. 
     */
    set(key, value) {
        this._cacheMap.set(key, value);
    }
}

export {MemoryCache};