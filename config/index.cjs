/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxcc7235b1c7d22b42',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '74b6a796b2e4803b7a4958101c9f01f6',

  PROVINCE: '福州',
  CITY: '厦门',

  USERS: [
    {
      // 想要发送的人的名字
      name: '思思',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'omdm750QqhjOdEdSEQkdJy0CxnYc',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'xlPGwRcPA_46Bbem8aSq18wmQeyIGgvEA_OvUnNCZxo',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-12',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '思思', year: '2002', date: '11-12',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '华哥', year: '2003', date: '05-19',
        },
        {
          type: '节日', name: '相恋纪念日', year: '2020', date: '10-26',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-10-26' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'omdm750QqhjOdEdSEQkdJy0CxnYc',

  CALLBACK_USERS: [
    {
      name: 'omdm757ZjyKRkXwgEms-vluLVHnY',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'omdm757ZjyKRkXwgEms-vluLVHnY',
    }
  ],

}

module.exports = USER_CONFIG

