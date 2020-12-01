# Migration `20201128115213-user-unqiue-key`

This migration has been generated by Yu Taek at 11/28/2020, 8:52:13 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `Users` MODIFY `username` VARCHAR(191) NOT NULL,
    MODIFY `password` VARCHAR(191) NOT NULL

CREATE UNIQUE INDEX `user` ON `Users`(`username`, `password`)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201126065920-add-genre-relationship..20201128115213-user-unqiue-key
--- datamodel.dml
+++ datamodel.dml
@@ -3,19 +3,21 @@
 }
 datasource db {
   provider = "mysql"
-  url = "***"
+  url = "***"
 }
 model Users {
   id        Int         @id @default(autoincrement())
-  username  String?
-  password  String?
+  username  String
+  password  String
   oAuth     String?
   createdAt DateTime
   updatedAt DateTime
   Playlists Playlists[]
+  
+  @@unique(fields: [username, password], name: "user")
 }
 model Albums {
   id          Int      @id @default(autoincrement())
```

