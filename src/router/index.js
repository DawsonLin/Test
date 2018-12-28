import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page from '@/components/Page'
import choose from '@/components/choose'
import input from '@/components/form/input'
import keyDemo from '@/components/form/keyDemo'
import StudentInfo from '@/components/StudentInfo'
import Mytable from '@/components/Mytable'
import StudentInfo2 from '@/components/StudentInfo2'
import Exchange from '@/components/Exchange'
import ExchangeNew from '@/components/ExchangeNew'
import computedDemo from '@/components/Exercise/computedDemo'
import RMBex from '@/components/RMBexchange'
import Filter from '@/components/Exercise/Filter'
import test1 from '@/components/Exercise/test1'
import Douban from '@/components/DoubanApi'
import Hao123 from '@/components/Hao123/Hao123'
import Hao from '@/components/Hao123/Hao'
import Index from '@/components/Hao123/index'
import Third from '@/components/Hao123/third'
import taobao from '@/components/taobao/index'
import Parent from '@/components/page/parent'

Vue.use(Router)

export default new Router({
routes: [
{
path:'/',
redirect: '/taobao'
},
{
path: '/',
name: 'HelloWorld',
component: HelloWorld
},
{
path: '/page',
name: 'Page',
component: Page
},
{
path: '/choose',
name: 'choose',
component: choose
},
{
path: '/input',
name: 'input',
component: input
},
{
path: '/keyDemo',
name: 'keyDemo',
component: keyDemo
},
{
path: '/StudentInfo',
name: 'StudentInfo',
component: StudentInfo
},
{
path: '/Mytable',
name: 'Mytable',
component: Mytable
},
{
path: '/StudentInfo2',
name: 'StudentInfo2',
component: StudentInfo2
},
{
path: '/Exchange',
name: 'Exchange',
component: Exchange
},
{
path: '/ExchangeNew',
name: 'ExchangeNew',
component: ExchangeNew
},
{
path: '/computedDemo',
name: 'computedDemo',
component: computedDemo
},
{
path: '/RMBex',
name: 'RMBex',
component: RMBex
},
{
path: '/Filter',
name: 'Filter',
component: Filter
},
{
path: '/test1',
name: 'test1',
component: test1
},
{
path: '/Douban',
name: 'Douban',
component: Douban
},
{
path: '/Hao123',
name: 'Hao123',
component: Hao123,
children: [{
path: '/Hao123/router',
components: {
a: Index,
b: Hao,
c: Third,
d: taobao,
e: Douban
}
}]
},
{
path: '/taobao',
name: 'taobao',
component: taobao
},
{
path: '/parent',
name: 'Parent',
component: Parent
}

]
})