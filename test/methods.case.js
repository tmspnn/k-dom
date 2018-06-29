(function optionsCase() {
  var kDom = window.kDom;

  if (typeof kDom != 'object') {
    return new TypeError('kDom is not a object');
  }

  var appDiv = kDom.$('#app');

  if (!appDiv) {
    return new Error('$ #app not works');
  }

  var customEventDetail = null;
  window.addEventListener('myevent', function(e) {
    customEventDetail = e.detail;
  });
  window.dispatchEvent(kDom.createEvent('myevent', { test: true }));

  if (!customEventDetail.test) {
    return new Error('createEvent not works');
  }

  var docFrag = kDom.DocFrag(
    kDom.h('div', { id: 'd1' }, 'Div 1'),
    kDom.h('div', { id: 'd2' }, 'Div 2'),
    kDom.h('div', { id: 'd3' }, 'Div 3')
  );

  for (var i = 0; i < docFrag.children.length; i++) {
    if (!(docFrag.children[i] instanceof HTMLDivElement)) {
      return new Error('children of docFrag are not divs');
    }
    if (docFrag.children[i].id != 'd' + (i + 1)) {
      return new Error('ids of docFrag.children are not correct');
    }
    if (docFrag.children[i].textContent != 'Div ' + (i + 1)) {
      return new Error('testContents of docFrag.children are not correct');
    }
  }

  var appDivClone = kDom.cloneNode(appDiv);
  if (!(appDivClone instanceof HTMLDivElement)) {
    return new Error('clodeNode not works');
  }

  appDivClone.id = 'app-clone';
  kDom.replaceNode(appDiv, appDivClone);
  if (!kDom.$('#app-clone')) {
    return new Error('replaceNode not works');
  }

  kDom.style(appDivClone, { color: 'rgb(255, 255, 255)' });
  if (appDivClone.style.getPropertyValue('color') != 'rgb(255, 255, 255)') {
    return new Error('style not works');
  }

  var svgEl = kDom.svg('svg');
  if (svgEl.tagName.toLowerCase() != 'svg') {
    return new Error('svg not works');
  }

  var div = kDom.string2El('<div id="string2el"></div>');
  if (!(div instanceof HTMLDivElement)) {
    return new Error('kDom.string2El not works');
  }

  kDom.append(appDivClone, div);
  if (appDivClone.firstElementChild != div) {
    return new Error('append not works');
  }

  kDom.prepend(appDivClone, kDom.h('div', { id: 'prepend' }, 'Div prepended'));
  if (appDivClone.firstElementChild.id != 'prepend') {
    return new Error('prepend not works');
  }

  return 0;
})();
