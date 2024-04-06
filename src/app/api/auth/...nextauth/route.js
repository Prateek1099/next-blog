import NextAuth from "next-auth";
import {authOptions} from "@/utilities/auth"
export default NextAuth(authOptions);