-- DropIndex
DROP INDEX "Guest_email_idx";

-- DropIndex
DROP INDEX "Guest_email_key";

-- CreateIndex
CREATE INDEX "Guest_age_idx" ON "Guest"("age");
