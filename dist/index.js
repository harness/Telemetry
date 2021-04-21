(()=>{"use strict";var t={d:(e,i)=>{for(var n in i)t.o(i,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function i(){var t;return void 0!==window.analytics&&void 0!==(null===(t=window.analytics)||void 0===t?void 0:t.initialize)}t.r(e),t.d(e,{default:()=>n});class n{constructor(t){t&&function(t){const e=window.analytics=window.analytics||[];if(!e.initialize)if(e.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{e.invoked=!0,e.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"],e.factory=function(t){return function(...i){const n=Array.prototype.slice.call(i);return n.unshift(t),e.push(n),e}};for(let t=0;t<e.methods.length;t+=1){const i=e.methods[t];e[i]=e.factory(i)}e.load=function(t,i){var n;const a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src=`https://cdn.segment.com/analytics.js/v1/${t}/analytics.min.js`;const o=document.getElementsByTagName("script")[0];null===(n=o.parentNode)||void 0===n||n.insertBefore(a,o),e._loadOptions=i},e.SNIPPET_VERSION="4.1.0",e.load(t)}}(t),this.analytics=window.analytics,this.initialized=i(),this.initialized||"undefined"==typeof window||(this.statusInterval=window.setInterval(this.updateInitializedStatus,1e3))}set setAccountId(t){this.accountId=t}augmentProperties(t){return this.accountId?Object.assign(Object.assign({},t),{url:window.location.href,accountId:this.accountId}):Object.assign(Object.assign({},t),{url:window.location.href})}updateInitializedStatus(){i()&&(this.initialized=!0,this.analytics=window.analytics,clearInterval(this.statusInterval))}checkInitialized(){return!!this.initialized||(console.error("The telemetry package needs to be initialized before calling analytics methods"),!1)}identify(t){this.checkInitialized()&&this.analytics.identify(t,null,{},{})}track(t){if(this.checkInitialized()){const{event:e,properties:i}=t,n=this.augmentProperties(i);this.analytics.track(e,n,{},{})}}page(t){if(this.checkInitialized()){const{name:e,category:i,properties:n}=t,a=this.augmentProperties(n);this.analytics.page(i,e,a,{},{})}}}var a=exports;for(var o in e)a[o]=e[o];e.__esModule&&Object.defineProperty(a,"__esModule",{value:!0})})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2luZ3Mtc29mdHdhcmUvdGVsZW1ldHJ5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0B3aW5ncy1zb2Z0d2FyZS90ZWxlbWV0cnkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0B3aW5ncy1zb2Z0d2FyZS90ZWxlbWV0cnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9Ad2luZ3Mtc29mdHdhcmUvdGVsZW1ldHJ5L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQHdpbmdzLXNvZnR3YXJlL3RlbGVtZXRyeS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9Ad2luZ3Mtc29mdHdhcmUvdGVsZW1ldHJ5Ly4vc3JjL2FuYWx5dGljcy50cyJdLCJuYW1lcyI6WyJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZXhwb3J0cyIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0Iiwib2JqIiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJpc0luaXRpYWxpemVkIiwid2luZG93IiwiYW5hbHl0aWNzIiwiaW5pdGlhbGl6ZSIsIlRlbGVtZXRyeSIsInNvdXJjZUtleSIsImludm9rZWQiLCJjb25zb2xlIiwiZXJyb3IiLCJtZXRob2RzIiwiZmFjdG9yeSIsIm1ldGhvZCIsImZ1bmN0aW9uQXJncyIsImFyZ3MiLCJBcnJheSIsInNsaWNlIiwidW5zaGlmdCIsInB1c2giLCJpIiwibGVuZ3RoIiwibG9hZCIsIm9wdGlvbnMiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiYXN5bmMiLCJzcmMiLCJmaXJzdCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIl9sb2FkT3B0aW9ucyIsIlNOSVBQRVRfVkVSU0lPTiIsImluaXRpYWxpemVBbmFseXRpY3MiLCJ0aGlzIiwiaW5pdGlhbGl6ZWQiLCJzdGF0dXNJbnRlcnZhbCIsInNldEludGVydmFsIiwidXBkYXRlSW5pdGlhbGl6ZWRTdGF0dXMiLCJpZCIsImFjY291bnRJZCIsInByb3BlcnRpZXMiLCJ1cmwiLCJsb2NhdGlvbiIsImhyZWYiLCJjbGVhckludGVydmFsIiwidXNlcklkIiwiY2hlY2tJbml0aWFsaXplZCIsImlkZW50aWZ5IiwidHJhY2siLCJldmVudCIsImF1Z21lbnRlZFByb3BlcnRpZXMiLCJhdWdtZW50UHJvcGVydGllcyIsInBhZ2UiLCJuYW1lIiwiY2F0ZWdvcnkiXSwibWFwcGluZ3MiOiJtQkFDQSxJQUFJQSxFQUFzQixDQ0ExQixFQUF3QixDQUFDQyxFQUFTQyxLQUNqQyxJQUFJLElBQUlDLEtBQU9ELEVBQ1hGLEVBQW9CSSxFQUFFRixFQUFZQyxLQUFTSCxFQUFvQkksRUFBRUgsRUFBU0UsSUFDNUVFLE9BQU9DLGVBQWVMLEVBQVNFLEVBQUssQ0FBRUksWUFBWSxFQUFNQyxJQUFLTixFQUFXQyxNQ0ozRSxFQUF3QixDQUFDTSxFQUFLQyxJQUFVTCxPQUFPTSxVQUFVQyxlQUFlQyxLQUFLSixFQUFLQyxHQ0NsRixFQUF5QlQsSUFDSCxvQkFBWGEsUUFBMEJBLE9BQU9DLGFBQzFDVixPQUFPQyxlQUFlTCxFQUFTYSxPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RYLE9BQU9DLGVBQWVMLEVBQVMsYUFBYyxDQUFFZSxPQUFPLE0sS0NPdkQsU0FBU0MsSSxNQUNQLFlBQW1DLElBQXJCQyxPQUFPQyxnQkFBcUUsS0FBakIsUUFBaEIsRUFBQUQsT0FBT0MsaUJBQVMsZUFBRUMsWSw4QkFHOUQsTUFBTUMsRUFNbkIsWUFBWUMsR0FDTkEsR0NkTyxTQUE2QkEsR0FDMUMsTUFBTUgsRUFBYUQsT0FBT0MsVUFBWUQsT0FBT0MsV0FBYSxHQUcxRCxJQUFJQSxFQUFVQyxXQUdkLEdBQUlELEVBQVVJLFFBQ1JMLE9BQU9NLFNBQVdBLFFBQVFDLE9BQzVCRCxRQUFRQyxNQUFNLHVDQUZsQixDQVNBTixFQUFVSSxTQUFVLEVBR3BCSixFQUFVTyxRQUFVLENBQ2xCLGNBQ0EsYUFDQSxZQUNBLFlBQ0EsV0FDQSxXQUNBLFFBQ0EsUUFDQSxRQUNBLFFBQ0EsUUFDQSxRQUNBLE9BQ0EsT0FDQSxNQUNBLEtBQ0Esc0JBQ0EsMkJBQ0EsaUJBQ0EsNEJBT0ZQLEVBQVVRLFFBQVUsU0FBVUMsR0FDNUIsT0FBTyxZQUFhQyxHQUNsQixNQUFNQyxFQUFPQyxNQUFNcEIsVUFBVXFCLE1BQU1uQixLQUFLZ0IsR0FHeEMsT0FGQUMsRUFBS0csUUFBUUwsR0FDYlQsRUFBVWUsS0FBS0osR0FDUlgsSUFLWCxJQUFLLElBQUlnQixFQUFJLEVBQUdBLEVBQUloQixFQUFVTyxRQUFRVSxPQUFRRCxHQUFLLEVBQUcsQ0FDcEQsTUFBTWhDLEVBQU1nQixFQUFVTyxRQUFRUyxHQUM5QmhCLEVBQVVoQixHQUFPZ0IsRUFBVVEsUUFBUXhCLEdBS3JDZ0IsRUFBVWtCLEtBQU8sU0FBVWxDLEVBQVVtQyxHLE1BRW5DLE1BQU1DLEVBQVNDLFNBQVNDLGNBQWMsVUFDdENGLEVBQU9HLEtBQU8sa0JBQ2RILEVBQU9JLE9BQVEsRUFDZkosRUFBT0ssSUFBTSwyQ0FBMkN6QyxxQkFHeEQsTUFBTTBDLEVBQVFMLFNBQVNNLHFCQUFxQixVQUFVLEdBQ3RDLFFBQWhCLEVBQUFELEVBQU1FLGtCQUFVLFNBQUVDLGFBQWFULEVBQVFNLEdBQ3ZDMUIsRUFBVThCLGFBQWVYLEdBSTNCbkIsRUFBVStCLGdCQUFrQixRQUk1Qi9CLEVBQVVrQixLQUFLZixJRGxFWDZCLENBQW9CN0IsR0FHdEI4QixLQUFLakMsVUFBWUQsT0FBT0MsVUFDeEJpQyxLQUFLQyxZQUFjcEMsSUFFZG1DLEtBQUtDLGFBQWlDLG9CQUFYbkMsU0FDOUJrQyxLQUFLRSxlQUFpQnBDLE9BQU9xQyxZQUFZSCxLQUFLSSx3QkFBeUIsTUFJM0UsaUJBQWlCQyxHQUNmTCxLQUFLTSxVQUFZRCxFQUduQixrQkFBa0JFLEdBQ2hCLE9BQUlQLEtBQUtNLFVBQ0EsT0FBUCx3QkFDS0MsR0FBVSxDQUNiQyxJQUFLMUMsT0FBTzJDLFNBQVNDLEtBQ3JCSixVQUFXTixLQUFLTSxZQUliLE9BQVAsd0JBQ0tDLEdBQVUsQ0FDYkMsSUFBSzFDLE9BQU8yQyxTQUFTQyxPQUl6QiwwQkFDTTdDLE1BQ0ZtQyxLQUFLQyxhQUFjLEVBQ25CRCxLQUFLakMsVUFBWUQsT0FBT0MsVUFDeEI0QyxjQUFjWCxLQUFLRSxpQkFJdkIsbUJBQ0UsUUFBSUYsS0FBS0MsY0FLVDdCLFFBQVFDLE1BQU0sbUZBRVAsR0FHVCxTQUFTdUMsR0FDSFosS0FBS2Esb0JBQ1BiLEtBQUtqQyxVQUFVK0MsU0FBU0YsRUFBUSxLQUFNLEdBQUksSUFJOUMsTUFBTUcsR0FDSixHQUFJZixLQUFLYSxtQkFBb0IsQ0FDM0IsTUFBTSxNQUFFRyxFQUFLLFdBQUVULEdBQWVRLEVBRXhCRSxFQUFzQmpCLEtBQUtrQixrQkFBa0JYLEdBRW5EUCxLQUFLakMsVUFBVWdELE1BQU1DLEVBQU9DLEVBQXFCLEdBQUksS0FJekQsS0FBS0UsR0FDSCxHQUFJbkIsS0FBS2EsbUJBQW9CLENBQzNCLE1BQU0sS0FBRU8sRUFBSSxTQUFFQyxFQUFRLFdBQUVkLEdBQWVZLEVBRWpDRixFQUFzQmpCLEtBQUtrQixrQkFBa0JYLEdBRW5EUCxLQUFLakMsVUFBVW9ELEtBQUtFLEVBQVVELEVBQU1ILEVBQXFCLEdBQUksTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRyYWNrIGZyb20gJy4vdHlwZXMvVHJhY2snXG5pbXBvcnQgUGFnZSBmcm9tICcuL3R5cGVzL1BhZ2UnXG5cbmltcG9ydCBpbml0aWFsaXplQW5hbHl0aWNzIGZyb20gJy4vYW5hbHl0aWNzJ1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgYW5hbHl0aWNzOiBhbnlcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0luaXRpYWxpemVkKCk6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdy5hbmFseXRpY3MgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuYW5hbHl0aWNzPy5pbml0aWFsaXplICE9PSAndW5kZWZpbmVkJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWxlbWV0cnkge1xuICBhbmFseXRpY3M6IFdpbmRvd1snYW5hbHl0aWNzJ11cbiAgYWNjb3VudElkPzogc3RyaW5nXG4gIGluaXRpYWxpemVkOiBib29sZWFuXG4gIHN0YXR1c0ludGVydmFsPzogbnVtYmVyXG5cbiAgY29uc3RydWN0b3Ioc291cmNlS2V5Pzogc3RyaW5nKSB7XG4gICAgaWYgKHNvdXJjZUtleSkge1xuICAgICAgaW5pdGlhbGl6ZUFuYWx5dGljcyhzb3VyY2VLZXkpXG4gICAgfVxuXG4gICAgdGhpcy5hbmFseXRpY3MgPSB3aW5kb3cuYW5hbHl0aWNzXG4gICAgdGhpcy5pbml0aWFsaXplZCA9IGlzSW5pdGlhbGl6ZWQoKVxuXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpemVkICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnN0YXR1c0ludGVydmFsID0gd2luZG93LnNldEludGVydmFsKHRoaXMudXBkYXRlSW5pdGlhbGl6ZWRTdGF0dXMsIDEwMDApXG4gICAgfVxuICB9XG5cbiAgc2V0IHNldEFjY291bnRJZChpZDogc3RyaW5nKSB7XG4gICAgdGhpcy5hY2NvdW50SWQgPSBpZFxuICB9XG5cbiAgYXVnbWVudFByb3BlcnRpZXMocHJvcGVydGllczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIGlmICh0aGlzLmFjY291bnRJZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4ucHJvcGVydGllcyxcbiAgICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgYWNjb3VudElkOiB0aGlzLmFjY291bnRJZFxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAuLi5wcm9wZXJ0aWVzLFxuICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZlxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUluaXRpYWxpemVkU3RhdHVzKCk6IHZvaWQge1xuICAgIGlmIChpc0luaXRpYWxpemVkKCkpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlXG4gICAgICB0aGlzLmFuYWx5dGljcyA9IHdpbmRvdy5hbmFseXRpY3NcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zdGF0dXNJbnRlcnZhbClcbiAgICB9XG4gIH1cblxuICBjaGVja0luaXRpYWxpemVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmluaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgY29uc29sZS5lcnJvcignVGhlIHRlbGVtZXRyeSBwYWNrYWdlIG5lZWRzIHRvIGJlIGluaXRpYWxpemVkIGJlZm9yZSBjYWxsaW5nIGFuYWx5dGljcyBtZXRob2RzJylcblxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWRlbnRpZnkodXNlcklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGVja0luaXRpYWxpemVkKCkpIHtcbiAgICAgIHRoaXMuYW5hbHl0aWNzLmlkZW50aWZ5KHVzZXJJZCwgbnVsbCwge30sIHt9KVxuICAgIH1cbiAgfVxuXG4gIHRyYWNrKHRyYWNrOiBUcmFjayk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoZWNrSW5pdGlhbGl6ZWQoKSkge1xuICAgICAgY29uc3QgeyBldmVudCwgcHJvcGVydGllcyB9ID0gdHJhY2tcblxuICAgICAgY29uc3QgYXVnbWVudGVkUHJvcGVydGllcyA9IHRoaXMuYXVnbWVudFByb3BlcnRpZXMocHJvcGVydGllcylcblxuICAgICAgdGhpcy5hbmFseXRpY3MudHJhY2soZXZlbnQsIGF1Z21lbnRlZFByb3BlcnRpZXMsIHt9LCB7fSlcbiAgICB9XG4gIH1cblxuICBwYWdlKHBhZ2U6IFBhZ2UpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jaGVja0luaXRpYWxpemVkKCkpIHtcbiAgICAgIGNvbnN0IHsgbmFtZSwgY2F0ZWdvcnksIHByb3BlcnRpZXMgfSA9IHBhZ2VcblxuICAgICAgY29uc3QgYXVnbWVudGVkUHJvcGVydGllcyA9IHRoaXMuYXVnbWVudFByb3BlcnRpZXMocHJvcGVydGllcylcblxuICAgICAgdGhpcy5hbmFseXRpY3MucGFnZShjYXRlZ29yeSwgbmFtZSwgYXVnbWVudGVkUHJvcGVydGllcywge30sIHt9KVxuICAgIH1cbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGFuYWx5dGljczogYW55XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFuYWx5dGljcyhzb3VyY2VLZXk6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBhbmFseXRpY3MgPSAod2luZG93LmFuYWx5dGljcyA9IHdpbmRvdy5hbmFseXRpY3MgfHwgW10pXG5cbiAgLy8gSWYgdGhlIHJlYWwgYW5hbHl0aWNzLmpzIGlzIGFscmVhZHkgb24gdGhlIHBhZ2UgcmV0dXJuLlxuICBpZiAoYW5hbHl0aWNzLmluaXRpYWxpemUpIHJldHVyblxuXG4gIC8vIElmIHRoZSBzbmlwcGV0IHdhcyBpbnZva2VkIGFscmVhZHkgc2hvdyBhbiBlcnJvci5cbiAgaWYgKGFuYWx5dGljcy5pbnZva2VkKSB7XG4gICAgaWYgKHdpbmRvdy5jb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1NlZ21lbnQgc25pcHBldCBpbmNsdWRlZCB0d2ljZS4nKVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIEludm9rZWQgZmxhZywgdG8gbWFrZSBzdXJlIHRoZSBzbmlwcGV0XG4gIC8vIGlzIG5ldmVyIGludm9rZWQgdHdpY2UuXG4gIGFuYWx5dGljcy5pbnZva2VkID0gdHJ1ZVxuXG4gIC8vIEEgbGlzdCBvZiB0aGUgbWV0aG9kcyBpbiBBbmFseXRpY3MuanMgdG8gc3R1Yi5cbiAgYW5hbHl0aWNzLm1ldGhvZHMgPSBbXG4gICAgJ3RyYWNrU3VibWl0JyxcbiAgICAndHJhY2tDbGljaycsXG4gICAgJ3RyYWNrTGluaycsXG4gICAgJ3RyYWNrRm9ybScsXG4gICAgJ3BhZ2V2aWV3JyxcbiAgICAnaWRlbnRpZnknLFxuICAgICdyZXNldCcsXG4gICAgJ2dyb3VwJyxcbiAgICAndHJhY2snLFxuICAgICdyZWFkeScsXG4gICAgJ2FsaWFzJyxcbiAgICAnZGVidWcnLFxuICAgICdwYWdlJyxcbiAgICAnb25jZScsXG4gICAgJ29mZicsXG4gICAgJ29uJyxcbiAgICAnYWRkU291cmNlTWlkZGxld2FyZScsXG4gICAgJ2FkZEludGVncmF0aW9uTWlkZGxld2FyZScsXG4gICAgJ3NldEFub255bW91c0lkJyxcbiAgICAnYWRkRGVzdGluYXRpb25NaWRkbGV3YXJlJ1xuICBdXG5cbiAgLy8gRGVmaW5lIGEgZmFjdG9yeSB0byBjcmVhdGUgc3R1YnMuIFRoZXNlIGFyZSBwbGFjZWhvbGRlcnNcbiAgLy8gZm9yIG1ldGhvZHMgaW4gQW5hbHl0aWNzLmpzIHNvIHRoYXQgeW91IG5ldmVyIGhhdmUgdG8gd2FpdFxuICAvLyBmb3IgaXQgdG8gbG9hZCB0byBhY3R1YWxseSByZWNvcmQgZGF0YS4gVGhlIGBtZXRob2RgIGlzXG4gIC8vIHN0b3JlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQsIHNvIHdlIGNhbiByZXBsYXkgdGhlIGRhdGEuXG4gIGFuYWx5dGljcy5mYWN0b3J5ID0gZnVuY3Rpb24gKG1ldGhvZDogKC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICguLi5mdW5jdGlvbkFyZ3M6IGFueVtdKSB7XG4gICAgICBjb25zdCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnVuY3Rpb25BcmdzKVxuICAgICAgYXJncy51bnNoaWZ0KG1ldGhvZClcbiAgICAgIGFuYWx5dGljcy5wdXNoKGFyZ3MpXG4gICAgICByZXR1cm4gYW5hbHl0aWNzXG4gICAgfVxuICB9XG5cbiAgLy8gRm9yIGVhY2ggb2Ygb3VyIG1ldGhvZHMsIGdlbmVyYXRlIGEgcXVldWVpbmcgc3R1Yi5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbmFseXRpY3MubWV0aG9kcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGtleSA9IGFuYWx5dGljcy5tZXRob2RzW2ldXG4gICAgYW5hbHl0aWNzW2tleV0gPSBhbmFseXRpY3MuZmFjdG9yeShrZXkpXG4gIH1cblxuICAvLyBEZWZpbmUgYSBtZXRob2QgdG8gbG9hZCBBbmFseXRpY3MuanMgZnJvbSBvdXIgQ0ROLFxuICAvLyBhbmQgdGhhdCB3aWxsIGJlIHN1cmUgdG8gb25seSBldmVyIGxvYWQgaXQgb25jZS5cbiAgYW5hbHl0aWNzLmxvYWQgPSBmdW5jdGlvbiAoa2V5OiBhbnksIG9wdGlvbnM6IGFueSkge1xuICAgIC8vIENyZWF0ZSBhbiBhc3luYyBzY3JpcHQgZWxlbWVudCBiYXNlZCBvbiB5b3VyIGtleS5cbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCdcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlXG4gICAgc2NyaXB0LnNyYyA9IGBodHRwczovL2Nkbi5zZWdtZW50LmNvbS9hbmFseXRpY3MuanMvdjEvJHtrZXl9L2FuYWx5dGljcy5taW4uanNgXG5cbiAgICAvLyBJbnNlcnQgb3VyIHNjcmlwdCBuZXh0IHRvIHRoZSBmaXJzdCBzY3JpcHQgZWxlbWVudC5cbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXVxuICAgIGZpcnN0LnBhcmVudE5vZGU/Lmluc2VydEJlZm9yZShzY3JpcHQsIGZpcnN0KVxuICAgIGFuYWx5dGljcy5fbG9hZE9wdGlvbnMgPSBvcHRpb25zXG4gIH1cblxuICAvLyBBZGQgYSB2ZXJzaW9uIHRvIGtlZXAgdHJhY2sgb2Ygd2hhdCdzIGluIHRoZSB3aWxkLlxuICBhbmFseXRpY3MuU05JUFBFVF9WRVJTSU9OID0gJzQuMS4wJ1xuXG4gIC8vIExvYWQgQW5hbHl0aWNzLmpzIHdpdGggeW91ciBrZXksIHdoaWNoIHdpbGwgYXV0b21hdGljYWxseVxuICAvLyBsb2FkIHRoZSB0b29scyB5b3UndmUgZW5hYmxlZCBmb3IgeW91ciBhY2NvdW50LiBCb29zaCFcbiAgYW5hbHl0aWNzLmxvYWQoc291cmNlS2V5KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==