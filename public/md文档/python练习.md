```python
### 类
#格式 ： class calssName(a,b,c):
            #...
#实例化: xx=calssnName(a,b,c)

###测试
#1、随机返回一个数
#2、

#导入json模块
import random 
import json

# num = list(range(1,10))# 生成数组
# print(random.choice(num))
#武魂抽取
def Power():
    file_path = 'data.json' #路径
    with open(file_path,encoding='utf-8') as f:
        all_data = json.load(f) #json转python
        this_data=random.choice(all_data) #随机一个
        name = this_data["name"]
    num = list(range(1,10))  
    hunli = random.choice(num)
    print("觉醒成功！您的武魂是：\n")
    print(name)
    print("先天魂力:"+hunli)
    set("玩家名称："+user_name)
    set("武魂："+name)

#写入文件
def set(obj):
    file_path = 'user_data.json' #路径
    with open(file_path,'a') as f:
        f.write(obj+"\n")

print("欢迎来到大陆")
next = True
user_name=input("\n请输入您的名字\n")  #用户名
###设置用户名
while next==True:
    if user_name == " ":
        print("非法命名，请重新输入\n")
        user_name = input("\n请输入您的名字\n")  # 重新输入用户名
    else:
        yn=input("\n是否进行武魂觉醒？\ny确认、输入其他返回上一步\n")
        if yn =="y":
            break
        else:
            user_name = input("\n请输入您的名字\n")
###进行武魂觉醒
Power()
```


```python
### 函数

#关键字  def

#格式：def function(参数):
            #语句...
#调用：  function(参数)

###练习1
#

def buy_list():
    #功能：展示一个购物清单，用户可以添加删除内容
    data=[]     #清单
    button=True  #while开关
    print("\n当前清单:")
    print(data)

    while button==True:
            massage=input("\n添加请输入add,删除请输入del,退出请输入quit\n") 
            if massage=="add":#添加
                add=input("请输入要添加的物品(多个请用,隔开)")
                if add!="quit":
                    addArr=add.split(",")#字符串转数组(列表)
                    for i in addArr:
                        data.append(i)
                    print("\n当前清单:")
                    print(data)
                else:
                    break
                    # continue
            if massage=="del":#删除
                dels=input("请输入要删除的物品(单个)")
                if dels!="quit":
                    if dels in data:
                        data.remove(dels)
                        print("当前清单:")
                        print(data)
                    else:
                        print("\n当前清单中没有这个物品，请确认名称")
                        continue
                else:
                    break
            if massage=="quit":
                break

    print("\n最终购物清单为:")
    print(data)

#调用
buy_list()
```