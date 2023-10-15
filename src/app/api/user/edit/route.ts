import { NextRequest, NextResponse } from "next/server"
import { KCUser } from "@/lib/method/KCUser"

export async function POST(request: NextRequest) {
    try {
        const userData = await request.json()
        const { name, email, passwordOld, passwordNew, passwordConfirm, telephone, address1, address2, address3, picture } = userData

        // Error Form Empty Fields
        if (name === "" || email === "" || telephone === "")
            return NextResponse.json("กรุณากรอกข้อมูลให้ครบถ้วน (ชื่อ, อีเมล, เบอร์โทรศัพท์)", { status: 400 })

        // Error Field Too Long
        if (name.length > 50 || email.length > 50 || passwordOld.length > 50 || passwordNew.length > 50 ||
            passwordConfirm > 50 || telephone.length > 50 || address1.length > 50 || address2.length > 50 || address3.length > 50)
            return NextResponse.json("กรุณากรอกข้อมูลไม่เกิน 50 ตัวอักษร", { status: 400 })

        // Error Password Too Short
        if (passwordOld.length >= 8 && (passwordConfirm.length < 8 || passwordNew.length < 8))
            return NextResponse.json("กรุณากรอกรหัสผ่านใหม่อย่างน้อย 8 ตัวอักษร", { status: 400 })

        const user = KCUser.getSignInUser()
        if (user == null)
            return NextResponse.json("กรุณาเข้าสู่ระบบก่อนแก้ไขข้อมูล", { status: 400 })

        // Error Password Not Match
        if (passwordNew != passwordConfirm)
            return NextResponse.json("กรุณายืนยันรหัสผ่านให้ถูกต้อง", { status: 400 })

        if (user.getPassword() != passwordOld)
            return NextResponse.json("กรุณากรอกรหัสผ่านเก่าให้ถูกต้อง", { status: 400 })
        else
            user.setPassword(passwordNew)

        user.setName(name)
        user.setEmail(email)
        user.setTelephone(telephone)
        user.setAddress1(address1)
        user.setAddress2(address2)
        user.setAddress3(address3)
        user.setPicture(picture)
        const result = await KCUser.edit(user)

        return NextResponse.json(result, { status: 201 })
    } catch (error) {
        console.error("Error : ", error)
        return NextResponse.json(error, { status: 500 })
    }
}