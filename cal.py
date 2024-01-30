# 本金攤還的預算方式

total_amount = eval(input("請輸入金額:"))
amount = total_amount
rate = eval(input("請輸入匯率:"))
years = eval(input("請輸入貸款年限:"))

#固定本金
periods = years*12
monthly_pay = int(amount/periods)
print("每個月固定還息為:",monthly_pay)

month_rate = rate/100/12 #月利率
interest = round(amount*month_rate)

form = []
total_interest = 0
#每個月還款金額利息
for i in range(periods):
    interest = round(amount*month_rate)
    amount-=monthly_pay
    
    if i == periods-1:
        form.append([i+1,monthly_pay,interest,monthly_pay+interest,0])
        print(f'期別:{+1} 本金:{monthly_pay} 利息:{interest} 本利和:{monthly_pay+interest} 餘額:0')
    
    else:
        form.append([i+1,monthly_pay,interest,monthly_pay+interest,amount])
        print(f'期別:{+1} 本金:{monthly_pay} 利息:{interest} 本利和:{monthly_pay+interest} 餘額:{amount}')
        total_interest += interest
print(f'總還款金額:{total_amount},總還款利息{total_interest}')

