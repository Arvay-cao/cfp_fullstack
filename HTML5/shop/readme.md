# skr-shop 抖音电商

## 订单

### 模块化
    - 地址表
        设计这个表？
        需求
        consignee 收货人姓名 string
        mobile  手机号 string

        mongodb JSON可直接存进去
        {
            id :86,
            name :'中国',
        }

        country Object id int64 国家ID
        country Object name string 国家名称
        province object id int64 省ID
        province object name string 省名称
        city
        vollage
        street
        detailed_address 用户填的
        postal_code string 邮编
        address_id 地址id int64
        时间戳+随机数4位
            +new Date() 时间戳
            Math.random()*10000  随机四位数
            Math.ceil()  取整
            拼接得
          + new Date() +Math.ceil(Math.random()*10000)
