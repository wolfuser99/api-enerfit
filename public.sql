/*
 Navicat Premium Data Transfer

 Source Server         : enerfit
 Source Server Type    : PostgreSQL
 Source Server Version : 110007
 Source Host           : enerfit.ml:5432
 Source Catalog        : postgres
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 110007
 File Encoding         : 65001

 Date: 07/01/2021 12:48:15
*/


-- ----------------------------
-- Type structure for enum_Users_role
-- ----------------------------
DROP TYPE IF EXISTS "public"."enum_Users_role";
CREATE TYPE "public"."enum_Users_role" AS ENUM (
  'ADMIN',
  'USER'
);
ALTER TYPE "public"."enum_Users_role" OWNER TO "postgres";

-- ----------------------------
-- Sequence structure for Customers_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."Customers_id_seq";
CREATE SEQUENCE "public"."Customers_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for Products_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."Products_id_seq";
CREATE SEQUENCE "public"."Products_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for ProviderProducts_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."ProviderProducts_id_seq";
CREATE SEQUENCE "public"."ProviderProducts_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for Providers_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."Providers_id_seq";
CREATE SEQUENCE "public"."Providers_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for PurchaseOrderDetails_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."PurchaseOrderDetails_id_seq";
CREATE SEQUENCE "public"."PurchaseOrderDetails_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for PurchaseOrders_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."PurchaseOrders_id_seq";
CREATE SEQUENCE "public"."PurchaseOrders_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for ShippingGuideDetails_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."ShippingGuideDetails_id_seq";
CREATE SEQUENCE "public"."ShippingGuideDetails_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for ShippingGuides_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."ShippingGuides_id_seq";
CREATE SEQUENCE "public"."ShippingGuides_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for ShoppingGuideDetails_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."ShoppingGuideDetails_id_seq";
CREATE SEQUENCE "public"."ShoppingGuideDetails_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for ShoppingGuides_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."ShoppingGuides_id_seq";
CREATE SEQUENCE "public"."ShoppingGuides_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for Users_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."Users_id_seq";
CREATE SEQUENCE "public"."Users_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for Categories
-- ----------------------------
DROP TABLE IF EXISTS "public"."Categories";
CREATE TABLE "public"."Categories" (
  "id" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL
)
;

-- ----------------------------
-- Records of Categories
-- ----------------------------
INSERT INTO "public"."Categories" VALUES ('asdasdasdasdasdasfasf', '2021-01-06 16:53:06.116-03', '2021-01-06 16:53:06.116-03');

-- ----------------------------
-- Table structure for Customers
-- ----------------------------
DROP TABLE IF EXISTS "public"."Customers";
CREATE TABLE "public"."Customers" (
  "id" int4 NOT NULL DEFAULT nextval('"Customers_id_seq"'::regclass),
  "rut" varchar(255) COLLATE "pg_catalog"."default",
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "address" varchar(255) COLLATE "pg_catalog"."default",
  "purchaseUnity" varchar(255) COLLATE "pg_catalog"."default",
  "manager" varchar(255) COLLATE "pg_catalog"."default",
  "phone" int4,
  "direction" varchar(255) COLLATE "pg_catalog"."default",
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL
)
;

-- ----------------------------
-- Records of Customers
-- ----------------------------
INSERT INTO "public"."Customers" VALUES (42, '18.896.146-0', 'JOSE CARLOS ARRIAGADA MONTECINO', 'Pasaje 3, Hualpén
4470', 'asdasdas', 'aasdasdasdsadasd', 931173167, 'asdasdasdasd', '2021-01-06 17:08:16.973-03', '2021-01-06 17:08:16.973-03');

-- ----------------------------
-- Table structure for Products
-- ----------------------------
DROP TABLE IF EXISTS "public"."Products";
CREATE TABLE "public"."Products" (
  "id" int4 NOT NULL DEFAULT nextval('"Products_id_seq"'::regclass),
  "active" bool DEFAULT true,
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "categoryId" varchar(255) COLLATE "pg_catalog"."default",
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL
)
;

-- ----------------------------
-- Records of Products
-- ----------------------------

-- ----------------------------
-- Table structure for ProviderProducts
-- ----------------------------
DROP TABLE IF EXISTS "public"."ProviderProducts";
CREATE TABLE "public"."ProviderProducts" (
  "id" int4 NOT NULL DEFAULT nextval('"ProviderProducts_id_seq"'::regclass),
  "purchasePrice" int4,
  "salePrice" int4,
  "stock" int4 DEFAULT 0,
  "productId" int4,
  "providerId" int4,
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL
)
;

-- ----------------------------
-- Records of ProviderProducts
-- ----------------------------

-- ----------------------------
-- Table structure for Providers
-- ----------------------------
DROP TABLE IF EXISTS "public"."Providers";
CREATE TABLE "public"."Providers" (
  "id" int4 NOT NULL DEFAULT nextval('"Providers_id_seq"'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "rut" varchar(255) COLLATE "pg_catalog"."default",
  "business" varchar(255) COLLATE "pg_catalog"."default",
  "phone" varchar(255) COLLATE "pg_catalog"."default",
  "address" varchar(255) COLLATE "pg_catalog"."default",
  "currentAccountNumber" varchar(255) COLLATE "pg_catalog"."default",
  "deliveryTransport" varchar(255) COLLATE "pg_catalog"."default",
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL
)
;

-- ----------------------------
-- Records of Providers
-- ----------------------------

-- ----------------------------
-- Table structure for PurchaseOrderDetails
-- ----------------------------
DROP TABLE IF EXISTS "public"."PurchaseOrderDetails";
CREATE TABLE "public"."PurchaseOrderDetails" (
  "id" int4 NOT NULL DEFAULT nextval('"PurchaseOrderDetails_id_seq"'::regclass),
  "quantity" int4,
  "isInShoppingGuide" bool,
  "purchaseOrderId" int4,
  "productId" int4,
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL
)
;

-- ----------------------------
-- Records of PurchaseOrderDetails
-- ----------------------------

-- ----------------------------
-- Table structure for PurchaseOrders
-- ----------------------------
DROP TABLE IF EXISTS "public"."PurchaseOrders";
CREATE TABLE "public"."PurchaseOrders" (
  "id" int4 NOT NULL DEFAULT nextval('"PurchaseOrders_id_seq"'::regclass),
  "name" varchar(255) COLLATE "pg_catalog"."default",
  "deliveryDate" timestamptz(6),
  "deliveryCity" varchar(255) COLLATE "pg_catalog"."default",
  "deliveryRegion" varchar(255) COLLATE "pg_catalog"."default",
  "deliveryAddress" varchar(255) COLLATE "pg_catalog"."default",
  "deliveryMethod" varchar(255) COLLATE "pg_catalog"."default",
  "paymentContactName" varchar(255) COLLATE "pg_catalog"."default",
  "paymentContactPhone" varchar(255) COLLATE "pg_catalog"."default",
  "paymentContactEmail" varchar(255) COLLATE "pg_catalog"."default",
  "paymentMethod" varchar(255) COLLATE "pg_catalog"."default",
  "OrderContactName" varchar(255) COLLATE "pg_catalog"."default",
  "OrderContactPhone" varchar(255) COLLATE "pg_catalog"."default",
  "OrderContactEmail" varchar(255) COLLATE "pg_catalog"."default",
  "emailToSendInvoice" varchar(255) COLLATE "pg_catalog"."default",
  "fundingSource" varchar(255) COLLATE "pg_catalog"."default",
  "budgetAvailability" varchar(255) COLLATE "pg_catalog"."default",
  "observations" varchar(255) COLLATE "pg_catalog"."default",
  "deliveryObservations" varchar(255) COLLATE "pg_catalog"."default",
  "state" varchar(255) COLLATE "pg_catalog"."default",
  "invoiceFile" varchar(255) COLLATE "pg_catalog"."default",
  "createdByUserId" int4,
  "customerId" int4,
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL
)
;

-- ----------------------------
-- Records of PurchaseOrders
-- ----------------------------

-- ----------------------------
-- Table structure for ShippingGuideDetails
-- ----------------------------
DROP TABLE IF EXISTS "public"."ShippingGuideDetails";
CREATE TABLE "public"."ShippingGuideDetails" (
  "id" int4 NOT NULL DEFAULT nextval('"ShippingGuideDetails_id_seq"'::regclass),
  "quantity" int4,
  "shippingGuideId" int4,
  "providerProductId" int4,
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL
)
;

-- ----------------------------
-- Records of ShippingGuideDetails
-- ----------------------------

-- ----------------------------
-- Table structure for ShippingGuides
-- ----------------------------
DROP TABLE IF EXISTS "public"."ShippingGuides";
CREATE TABLE "public"."ShippingGuides" (
  "id" int4 NOT NULL DEFAULT nextval('"ShippingGuides_id_seq"'::regclass),
  "purchaseOrderId" int4,
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL
)
;

-- ----------------------------
-- Records of ShippingGuides
-- ----------------------------

-- ----------------------------
-- Table structure for ShoppingGuideDetails
-- ----------------------------
DROP TABLE IF EXISTS "public"."ShoppingGuideDetails";
CREATE TABLE "public"."ShoppingGuideDetails" (
  "id" int4 NOT NULL DEFAULT nextval('"ShoppingGuideDetails_id_seq"'::regclass),
  "quantity" int4,
  "stock" int4,
  "wasBought" bool,
  "deliveryState" varchar(255) COLLATE "pg_catalog"."default",
  "shoppingGuideId" int4,
  "providerProductId" int4,
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL
)
;

-- ----------------------------
-- Records of ShoppingGuideDetails
-- ----------------------------

-- ----------------------------
-- Table structure for ShoppingGuides
-- ----------------------------
DROP TABLE IF EXISTS "public"."ShoppingGuides";
CREATE TABLE "public"."ShoppingGuides" (
  "id" int4 NOT NULL DEFAULT nextval('"ShoppingGuides_id_seq"'::regclass),
  "invoiceFile" varchar(255) COLLATE "pg_catalog"."default",
  "providerId" int4,
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL
)
;

-- ----------------------------
-- Records of ShoppingGuides
-- ----------------------------

-- ----------------------------
-- Table structure for Users
-- ----------------------------
DROP TABLE IF EXISTS "public"."Users";
CREATE TABLE "public"."Users" (
  "id" int4 NOT NULL DEFAULT nextval('"Users_id_seq"'::regclass),
  "email" varchar(255) COLLATE "pg_catalog"."default",
  "name" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "lastname" varchar(255) COLLATE "pg_catalog"."default",
  "password" text COLLATE "pg_catalog"."default" NOT NULL,
  "role" "public"."enum_Users_role" NOT NULL DEFAULT 'USER'::"enum_Users_role",
  "active" bool DEFAULT true,
  "updatedDefaultPassword" bool DEFAULT false,
  "imageFile" varchar(255) COLLATE "pg_catalog"."default",
  "createdAt" timestamptz(6) NOT NULL,
  "updatedAt" timestamptz(6) NOT NULL
)
;

-- ----------------------------
-- Records of Users
-- ----------------------------
INSERT INTO "public"."Users" VALUES (1, 'admin@mail.cl', 'John', 'Admin', '$2a$10$PCyh71ZBnDJc2fllzNlP7OIvQarlRS3un9WnmUyHRXl9jP8I2jwTy', 'ADMIN', 't', 'f', NULL, '2020-06-10 18:57:13.34-04', '2020-06-10 18:57:13.34-04');
INSERT INTO "public"."Users" VALUES (2, 'user@mail.cl', 'John', NULL, '$2a$10$E8a/FUF8GCUUk69cJdBhd..MKqlYk1QjSFIiRlfLoVzmefq66J.jm', 'USER', 't', 'f', NULL, '2020-06-10 18:57:13.446-04', '2020-06-10 18:57:13.446-04');
INSERT INTO "public"."Users" VALUES (3, 'jcarriagc@gmail.com', 'JOSE CARLOS', 'MONTECINO', '$2a$10$ORUWmJTVNYt8AaUH4jI2geWlZquLaZbyhdrkpNvxWn3YjUx21XKrC', 'USER', 't', 'f', NULL, '2020-06-11 02:16:45.565-04', '2020-06-11 02:16:45.565-04');
INSERT INTO "public"."Users" VALUES (4, 'jcarriagcs@gmail.com', 'JOSE CARLOS', 'MONTECINO', '$2a$10$kulgjJhGKgqEBujsIN8Ao.bnKKdv76BUbFkJxwwMHmVDncef0K.JO', 'USER', 't', 'f', NULL, '2020-06-11 02:16:58.791-04', '2020-06-11 02:16:58.791-04');
INSERT INTO "public"."Users" VALUES (5, 'jcarriag@alumnos.ubiobio.cl', 'JOSE CARLOS', 'MONTECINO', '$2a$10$j8t/1Xs5W/RP64Irm..U7.xNiA4j145LCp2vHiBZRoBuvc7ASzVze', 'USER', 't', 'f', NULL, '2020-06-11 04:06:39.676-04', '2020-06-11 04:06:39.676-04');
INSERT INTO "public"."Users" VALUES (6, 'jcarriaghc@gmail.com', 'JOSE CARLOS', 'MONTECINO', '$2a$10$znrLvmlINNSKhEbTc0lDJu7s/c74JhrI4i/fbdnysY0r7p5DBSt3e', 'USER', 't', 'f', NULL, '2020-06-11 04:12:36.549-04', '2020-06-11 04:12:36.549-04');
INSERT INTO "public"."Users" VALUES (7, 'jcarriaghc@gmailx.com', 'JOSE CARLOS', 'MONTECINO', '$2a$10$zxqct6UD3Y6cfquQ6hbYIeC/pHVuDrz25h/QI.DwOY1jd2SZ4bsSi', 'USER', 't', 'f', NULL, '2020-06-11 04:12:59.34-04', '2020-06-11 04:12:59.34-04');
INSERT INTO "public"."Users" VALUES (9, 'jcarriasghc@gmailx.com', 'JOSE CARLOS', 'MONTECINO', '$2a$10$ZYvvFx67yBGlP8sHzKovieDgWylTMaIzkG5gkKqUDMYNko95GB8ui', 'USER', 't', 'f', NULL, '2020-06-11 04:13:23.209-04', '2020-06-11 04:13:23.209-04');
INSERT INTO "public"."Users" VALUES (10, 'josexd@sggs.cl', 'Jose', 'Arriagada ', '$2a$10$F6ZEfuS9uP3sm7T71RDV..7Lg0D1zDnPqpyo.nBIzqBssTf0CXWpe', 'USER', 't', 'f', NULL, '2020-06-11 10:22:30.899-04', '2020-06-11 10:22:30.899-04');
INSERT INTO "public"."Users" VALUES (11, 'prueba@pryebw.cl', 'Hshshshwhw', 'Vwshshw', '$2a$10$FE1FhY.bDjLSpZpf8LDLceUSuiNNcX1FH3/njy2im3SYOiHkKmdM2', 'USER', 't', 'f', NULL, '2020-06-11 10:23:02.127-04', '2020-06-11 10:23:02.127-04');

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."Customers_id_seq"
OWNED BY "public"."Customers"."id";
SELECT setval('"public"."Customers_id_seq"', 43, true);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."Products_id_seq"
OWNED BY "public"."Products"."id";
SELECT setval('"public"."Products_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."ProviderProducts_id_seq"
OWNED BY "public"."ProviderProducts"."id";
SELECT setval('"public"."ProviderProducts_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."Providers_id_seq"
OWNED BY "public"."Providers"."id";
SELECT setval('"public"."Providers_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."PurchaseOrderDetails_id_seq"
OWNED BY "public"."PurchaseOrderDetails"."id";
SELECT setval('"public"."PurchaseOrderDetails_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."PurchaseOrders_id_seq"
OWNED BY "public"."PurchaseOrders"."id";
SELECT setval('"public"."PurchaseOrders_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."ShippingGuideDetails_id_seq"
OWNED BY "public"."ShippingGuideDetails"."id";
SELECT setval('"public"."ShippingGuideDetails_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."ShippingGuides_id_seq"
OWNED BY "public"."ShippingGuides"."id";
SELECT setval('"public"."ShippingGuides_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."ShoppingGuideDetails_id_seq"
OWNED BY "public"."ShoppingGuideDetails"."id";
SELECT setval('"public"."ShoppingGuideDetails_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."ShoppingGuides_id_seq"
OWNED BY "public"."ShoppingGuides"."id";
SELECT setval('"public"."ShoppingGuides_id_seq"', 2, false);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."Users_id_seq"
OWNED BY "public"."Users"."id";
SELECT setval('"public"."Users_id_seq"', 12, true);

-- ----------------------------
-- Primary Key structure for table Categories
-- ----------------------------
ALTER TABLE "public"."Categories" ADD CONSTRAINT "Categories_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table Customers
-- ----------------------------
ALTER TABLE "public"."Customers" ADD CONSTRAINT "Customers_rut_key" UNIQUE ("rut");

-- ----------------------------
-- Primary Key structure for table Customers
-- ----------------------------
ALTER TABLE "public"."Customers" ADD CONSTRAINT "Customers_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table Products
-- ----------------------------
ALTER TABLE "public"."Products" ADD CONSTRAINT "Products_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table ProviderProducts
-- ----------------------------
ALTER TABLE "public"."ProviderProducts" ADD CONSTRAINT "ProviderProducts_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table Providers
-- ----------------------------
ALTER TABLE "public"."Providers" ADD CONSTRAINT "Providers_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table PurchaseOrderDetails
-- ----------------------------
ALTER TABLE "public"."PurchaseOrderDetails" ADD CONSTRAINT "PurchaseOrderDetails_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table PurchaseOrders
-- ----------------------------
ALTER TABLE "public"."PurchaseOrders" ADD CONSTRAINT "PurchaseOrders_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table ShippingGuideDetails
-- ----------------------------
ALTER TABLE "public"."ShippingGuideDetails" ADD CONSTRAINT "ShippingGuideDetails_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table ShippingGuides
-- ----------------------------
ALTER TABLE "public"."ShippingGuides" ADD CONSTRAINT "ShippingGuides_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table ShoppingGuideDetails
-- ----------------------------
ALTER TABLE "public"."ShoppingGuideDetails" ADD CONSTRAINT "ShoppingGuideDetails_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table ShoppingGuides
-- ----------------------------
ALTER TABLE "public"."ShoppingGuides" ADD CONSTRAINT "ShoppingGuides_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table Users
-- ----------------------------
ALTER TABLE "public"."Users" ADD CONSTRAINT "Users_email_key" UNIQUE ("email");

-- ----------------------------
-- Primary Key structure for table Users
-- ----------------------------
ALTER TABLE "public"."Users" ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Foreign Keys structure for table Products
-- ----------------------------
ALTER TABLE "public"."Products" ADD CONSTRAINT "Products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "public"."Categories" ("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table ProviderProducts
-- ----------------------------
ALTER TABLE "public"."ProviderProducts" ADD CONSTRAINT "ProviderProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Products" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."ProviderProducts" ADD CONSTRAINT "ProviderProducts_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "public"."Providers" ("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table PurchaseOrderDetails
-- ----------------------------
ALTER TABLE "public"."PurchaseOrderDetails" ADD CONSTRAINT "PurchaseOrderDetails_productId_fkey" FOREIGN KEY ("productId") REFERENCES "public"."Products" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."PurchaseOrderDetails" ADD CONSTRAINT "PurchaseOrderDetails_purchaseOrderId_fkey" FOREIGN KEY ("purchaseOrderId") REFERENCES "public"."PurchaseOrders" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table PurchaseOrders
-- ----------------------------
ALTER TABLE "public"."PurchaseOrders" ADD CONSTRAINT "PurchaseOrders_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "public"."Users" ("id") ON DELETE NO ACTION ON UPDATE CASCADE;
ALTER TABLE "public"."PurchaseOrders" ADD CONSTRAINT "PurchaseOrders_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "public"."Customers" ("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table ShippingGuideDetails
-- ----------------------------
ALTER TABLE "public"."ShippingGuideDetails" ADD CONSTRAINT "ShippingGuideDetails_providerProductId_fkey" FOREIGN KEY ("providerProductId") REFERENCES "public"."ProviderProducts" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."ShippingGuideDetails" ADD CONSTRAINT "ShippingGuideDetails_shippingGuideId_fkey" FOREIGN KEY ("shippingGuideId") REFERENCES "public"."ShippingGuides" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table ShippingGuides
-- ----------------------------
ALTER TABLE "public"."ShippingGuides" ADD CONSTRAINT "ShippingGuides_purchaseOrderId_fkey" FOREIGN KEY ("purchaseOrderId") REFERENCES "public"."PurchaseOrders" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table ShoppingGuideDetails
-- ----------------------------
ALTER TABLE "public"."ShoppingGuideDetails" ADD CONSTRAINT "ShoppingGuideDetails_providerProductId_fkey" FOREIGN KEY ("providerProductId") REFERENCES "public"."ProviderProducts" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "public"."ShoppingGuideDetails" ADD CONSTRAINT "ShoppingGuideDetails_shoppingGuideId_fkey" FOREIGN KEY ("shoppingGuideId") REFERENCES "public"."ShoppingGuides" ("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ----------------------------
-- Foreign Keys structure for table ShoppingGuides
-- ----------------------------
ALTER TABLE "public"."ShoppingGuides" ADD CONSTRAINT "ShoppingGuides_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "public"."Providers" ("id") ON DELETE CASCADE ON UPDATE CASCADE;
