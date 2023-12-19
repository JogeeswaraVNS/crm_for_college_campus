from tabula import read_pdf
from datetime import datetime, timedelta
now = datetime.now()
# time_slots = [9, 10, 11, 12, 14, 15, 16, 17]
# for i in range(1):
#     k=int(str(now.strftime("%H:%M:%S")).split(":")[0])
#     for hour in time_slots:
#         if k<hour:
#             if hour>12:
#                 print(hour-12)
#             else:
#                 print(hour)

time_slots = [9, 10, 11, 12, 14, 15, 16, 17]

for i in range(7):
    next_date = now + timedelta(days=i)
    for hour in time_slots:
	    print(next_date.strftime('%Y-%m-%d'),hour,'Available')




# df = read_pdf("C:/Users/jogee/Desktop/CRM for college campus Project/backend/I-B.Tech-I-Sem-(2021-22)[1] Roll List.pdf",pages="29") #address of pdf file
# a=[]
# for i in df:
#     for j in range(30):
#         a.append(i.loc[j])
# names=[]
# rollnos=[]
# passwords=[]
# for i in a:
#     names.append(i[1])
#     # rollnos.append(i[2])
#     # passwords.append(i[2]+'@'+'it')
# k=1001
# for i in range(30):
#     rollnos.append('21071A'+str(k))
#     k+=1
# for i in range(30):
#     passwords.append(rollnos[i]+'@'+'eie')
# print(names)
# print(rollnos)
# print(passwords)

# df = read_pdf("C:/Users/jogee/Desktop/CRM for college campus Project/backend/I-B.Tech-I-Sem-(2021-22)[1] Roll List.pdf",pages="29") #address of pdf file
# a=[]
# for i in df:
#     for j in range(30):
#         a.append(i.loc[j])
# names=[]
# rollnos=[]
# passwords=[]
# for i in a:
#     names.append(i[1])
#     # rollnos.append(i[2])
#     # passwords.append(i[2]+'@'+'it')
# k=1001
# for i in range(30):
#     rollnos.append('21071A'+str(k))
#     k+=1
# for i in range(30):
#     passwords.append(rollnos[i]+'@'+'eie')
# print(names)
# print(rollnos)
# print(passwords)

# df = read_pdf("C:/Users/jogee/Desktop/CRM for college campus Project/backend/it syllabus/IT.pdf",pages="1") #address of pdf file
# subject_codes=[]
# subject_names=[]
# lecture=[]
# tutorial=[]
# practical_drawing=[]
# contact_hours_weekly=[]
# subject_credits=[]
# sems=[]
# f=open("C:/Users/jogee/Desktop/CRM for college campus Project/backend/mech syllabus/mech syllabus.txt",'r')
# for i in f.readlines():
#     k=i.split()
#     r=''
#     subject_codes.append(k[0])
#     k.remove(k[0])
#     k.reverse()
#     sems.append(k[0])
#     k.remove(k[0])
#     subject_credits.append((k[0]))
#     k.remove(k[0])
#     contact_hours_weekly.append(k[0])
#     k.remove(k[0])
#     practical_drawing.append(k[0])
#     k.remove(k[0])
#     tutorial.append(k[0])
#     k.remove(k[0])
#     lecture.append(k[0])
#     k.remove(k[0])
#     k.reverse()
#     for j in range(len(k)):
#         r+=k[j]
#         if j!=len(k)-1:
#             r+=' '
#     subject_names.append(r)
# sem1=[]
# for i in range(len(subject_codes)):
#     a=[]
#     a.append(i+1)
#     a.append(subject_codes[i])
#     a.append(subject_names[i])
#     a.append(lecture[i])
#     a.append(tutorial[i])
#     a.append(practical_drawing[i])
#     a.append(contact_hours_weekly[i])
#     a.append(subject_credits[i])
#     a.append(int(sems[i]))
#     sem1.append(a)
# # print(len(sem1))
# for i in sem1:
#     print(i)

# s='Computer Science and Engineering (Artificial Intelligence and Machine Learning)'
# k=0
# for i in s:
#     k+=1
# print(k)
# holidays_days=[]
# holidays_dates=[]
# holidays=[]
# f=open("C:/Users/jogee/Desktop/CRM for college campus Project/backend/loh.txt",'r')
# for i in f.readlines():
#     k=i.split()
#     holidays_days.append(k[-1])
#     k.remove(k[-1])
#     holidays_dates.append(k[-1])
#     k.remove(k[-1])
#     r=''
#     for j in range(len(k)):
#         r+=k[j]
#         if j!=len(k)-1:
#             r+=' '
#     holidays.append(r)
# a=[]
# for i in range(len(holidays)):
#     b=[]
#     b.append(holidays[i])
#     b.append(holidays_dates[i])
#     b.append(holidays_days[i])
#     a.append(b)
# for i in a:
#     print(i)


# import random
# for i in range(30):
# 	print(random.randint(66, 93))