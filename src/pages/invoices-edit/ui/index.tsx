import Form from "@/widgets/invoices-edit-form";
import Breadcrumbs from "@/features/breadcrumbs";
import { fetchInvoiceById } from "@/widgets/invoices";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const invoice = await fetchInvoiceById(id);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Edit Invoice",
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} />
    </main>
  );
}
