import {defineSchema, defineTable} from "convex/server";
import {v} from "convex/values";
import {authTables} from "@convex-dev/auth/server";


export default defineSchema({
    ...authTables,
    users: defineTable({
        name: v.string(),
        tokenIdentifier: v.string(),
    }).index("by_token", ["tokenIdentifier"]),
});