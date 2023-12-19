f=open("C:/Users/jogee/Desktop/CRM/frontend/src/components/departments/Faculty/me.txt",'r')
jid=[]
email=[]
noa=[]
q=[]
doj=[]
prof=[]
name=[]
d=[]
for i in f.readlines():
    k=(i.split())[1:]
    d.append((k.pop()))
    jid.append(k.pop())
    email.append(k.pop())
    noa.append(k.pop())
    q.append(k.pop())
    doj.append(k.pop())
    n=''
    for j in k:
        if j=='Professor' or j=='Assistant' or j=='Associate' or j=='Prof.' or j=='Assoc.' or j=='Asst.' or j=='Sr.Asst.Professor':
            break
        else:
            n+=j+' '
    name.append(n)
    v=''
    for j in k:
        if j not in n:
            v+=j+' '
    prof.append(v)
for i in range(len(jid)):
    print(name[i],'k',prof[i],'k',doj[i],'k',q[i],'Regular',jid[i],'EIE')
    # row=Faculty(name[i],prof[i],doj[i],q[i],'Regular',jid[i],'IT')
    # db.session.add(row)
    # db.session.commit()


    # print(n)
    # print(v)


# for i in range(len(jid)):
#     print(name[i],prof[i],doj[i],q[i],jid[i])
# print(len(jid))
# print(len(q))
# print(len(doj))
# print(len(prof))
# print(len(name))