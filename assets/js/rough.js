//Rough Notation
import {annotate, annotationGroup } from 'https://unpkg.com/rough-notation?module'


const a1 = annotate(document.getElementById('a1'), { type: 'underline', color: '#d9e665', multiline: true, strokeWidth:2,});
const a2 = annotate(document.getElementById('a2'), { type: 'box', color: '#bf2a2a', padding:1, strokeWidth:2, multiline: true});
const a3 = annotate(document.querySelector('.a3'), { type: 'highlight', color: '#04348c', strokeWidth:2, multiline: true});
const a4 = annotate(document.querySelector('.a4'), { type: 'highlight', color: '#04348c', strokeWidth:2, multiline: true});
const a7 = annotate(document.querySelector('#a7'), { type: 'box', color: '#bf2a2a', padding:1, strokeWidth:2, multiline: true});
const a5 = annotate(document.querySelector('#a5'), { type: 'underline', color: '#bf56b8', strokeWidth:2, multiline: true});
const a6 = annotate(document.querySelector('#a6'), { type: 'bracket', brackets:'bottom', color: '#4ca162', multiline: true});

const ag = annotationGroup([a1,a2,a3,a4,a7,a5,a6]);
ag.show();