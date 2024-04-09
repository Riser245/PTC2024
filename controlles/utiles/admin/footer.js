// Codigo para tener el footer, para luego mandarlo a llamar

const footer = document.querySelector("footer");

footer.innerHTML = `<!-- Grid container -->
<div class="container p-4 pb-0" >
    <!-- Section: Social media -->
    <section class="mb-4">
        <!-- Facebook -->
        <a class="btn btn-primary btn-floating m-1 footer_color_boton"  href="#!"
            role="button"><img src="../../recursos/img/footer/facebook_img.png"  width="30px" alt=""></a>

        <!-- Correo -->
        <a class="btn btn-primary btn-floating m-1 footer_color_boton"  href="#!"
            role="button"><img src="../../recursos/img/footer/correo_img.png" width="30px" alt=""></a>

        <!-- Ubicación -->
        <a class="btn btn-primary btn-floating m-1 footer_color_boton"  href="#!"
            role="button"><img src="../../recursos/img/footer/lugar_img.png" width="30px" alt=""></a>

        <!-- WhatsApp -->
        <a class="btn btn-primary btn-floating m-1 footer_color_boton"  href="#!"
            role="button"><img src="../../recursos/img/footer/whatsapp_img.png" width="30px" alt=""></a>

    </section>
    <!-- Section: Social media -->
</div>
<!-- Grid container -->

<!-- Copyright -->
<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © 2024 Copyright:
    <a class="text-white" href="#">Quiropráctica Específica</a>
</div>
<!-- Copyright -->`