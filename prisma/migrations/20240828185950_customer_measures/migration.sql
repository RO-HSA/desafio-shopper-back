-- CreateTable
CREATE TABLE "customers" (
    "customer_code" TEXT NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("customer_code")
);

-- CreateTable
CREATE TABLE "measures" (
    "measure_uuid" TEXT NOT NULL,
    "measure_datetime" TIMESTAMP(3) NOT NULL,
    "measure_type" TEXT NOT NULL,
    "has_confirmed" BOOLEAN NOT NULL DEFAULT false,
    "image_url" TEXT NOT NULL,
    "customer_code" TEXT NOT NULL,

    CONSTRAINT "measures_pkey" PRIMARY KEY ("measure_uuid")
);

-- AddForeignKey
ALTER TABLE "measures" ADD CONSTRAINT "measures_customer_code_fkey" FOREIGN KEY ("customer_code") REFERENCES "customers"("customer_code") ON DELETE RESTRICT ON UPDATE CASCADE;
