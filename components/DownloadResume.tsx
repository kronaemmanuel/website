import { asset } from "$fresh/runtime.ts";

export default function DownloadResume() {
  return (
    <a
      href={asset("/KronaEmmanuel_Resume.pdf")}
      class="cursor-pointer fixed bottom-4 right-4 flex items-center bg-white p-2 rounded-lg border"
      download
    >
      <img src="/icons/download-sign.png" width="30" height="30" />
      <p class="ml-1">Download PDF</p>
    </a>
  );
}
