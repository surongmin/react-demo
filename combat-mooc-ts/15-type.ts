
// 使用第三方库 需要引入第三方库的声明文件 才能得到代码补全、接口提示等功能

// 使用jQuery

// jQuery(#foo) //报错  ts不知道jQuery是什么

// 自己声明一个jQuery  这样就可以使用jQuery了
declare var jQuery: (selector: string) => any

// 一般把声明文件单独放在一个文件 .d.ts结尾的文件名 —— 全局可以使用 jQuery

// 若其他文件不可以使用  需要配置文件
// 新建一个tscconfig.json 文件 里面写下面的代码
// {
//     "include": ["**/*"]
// }


// 可以直接使用第三方声明文件
// @types
// @types/jquery
// npm install --save @type/jquery 

// @type 是由DefinitelyTyped 提供的声明文件的社区


// 查找types
// 官网 TypeSearch
// 网址 microsoft.github.io/TypeSearch/

