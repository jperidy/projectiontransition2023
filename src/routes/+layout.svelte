<script>
    import Nav from './../components/nav/Nav.svelte';
    import '../mains.min.css';
    import Footer from './../components/footer/Footer.svelte';
    import ContactButton from './../components/contact/ContactButton.svelte';

    export let navBar = {
        "TITLE": [{
                "name": "Le festival",
                "url": "/",
                "SUBTITLE": []
            },
            {
                "name": "L'équipe",
                "url": "/",
                "SUBTITLE": []
            },
            {
                "name": "Programmation 2022",
                "url": "/programmation",
                "SUBTITLE": []
            },
            {
                "name": "Nos partenaires",
                "url": "/pages/partenaires",
                "SUBTITLE": []
            },
            {
                "name": "Informations pratiques",
                "url": "/informations-pratiques",
                "SUBTITLE": []
            },
            {
                "name": "BILLETTERIE",
                "url": "/pages/billetterie",
                "SUBTITLE": []
            }
        ],
        "name": "nav",
        "SOCIAL_NETWORK": [{
            "name": "sn",
            "icon": "/icon",
            "alt": "alt",
            "redirect": "/",
            "target": ""
        }],
        "BRAND": {
            "LOGO": {
                "path": "logo/Logo_Principal.jpg",
                "alt": "Retour à la page d'accueil",
                "style": "max-width: 20vh; height:auto;"
            },
            "NAME": ""
        },
        "STYLE": {
            "expand": "xl",
            "color": "light",
            "theme": "white",
            "TITLE": {
                "bootstrapClass": "text-outremer mx-1",
                "style": "font-family: Roboto-Regular;font-size: 1.2rem;font-weight: bold;"
            },
            "SOCIAL_NETWORKS": {
                "bootstrapClass": "",
                "style": "color: white; font-size: 2.5em;height:60px;"
            }
        },
        "SOCIAL_NETWORKS": [{
                "name": "Mail",
                "icon": "social-networks/MAIL.png",
                "alt": "Lien vers le formulaire de contacts",
                "redirect": "/pages/informationsPratiques#contact",
                "target": "",
                "bootstrapClass": "bi bi-envelope"
            },
            {
                "name": "Facebook",
                "icon": "social-networks/FB.png",
                "alt": "Lien vers la page Facebook",
                "redirect": "https://www.facebook.com/FestivalProjectionTransition/",
                "target": "_blank",
                "bootstrapClass": "bi bi-facebook"
            },
            {
                "name": "Instagramme",
                "icon": "social-networks/INSTA.png",
                "alt": "Lien vers la page instagramme",
                "redirect": "https://www.instagram.com/projectiontransition/",
                "target": "_blank",
                "bootstrapClass": "bi bi-instagram"
            },
            {
                "name": "Youtube",
                "icon": "social-networks/YT.png",
                "alt": "Lien vers la page Youtube",
                "redirect": "https://www.youtube.com/channel/UCgSSefHpeDC42nXZcOy97aA",
                "target": "_blank",
                "bootstrapClass": "bi bi-youtube"
            }
        ],
    }

    export let footer = {
        "_id": {
            "$oid": "62dc0f2b4b566c715b873a91"
        },
        "TITLE": [{
            "name": "QUI SOMMES-NOUS",
            "url": "/pages/the-shift-project#up",
            "SUBTITLE": []
        }, {
            "name": "PRESSE",
            "url": "/pages/presse#up",
            "SUBTITLE": []
        }, {
            "name": "ARCHIVES 2020",
            "url": "/pages/archives-2020#up",
            "SUBTITLE": []
        }, {
            "name": "MENTIONS LÉGALES",
            "url": "/pages/mentions-legales#up",
            "SUBTITLE": []
        }],
        "SOCIAL_NETWORKS": [{
            "name": "mail",
            "icon": "social-networks/MAIL.png",
            "alt": "Lien vers la forme pour envoyer un email au contact",
            "redirect": "/pages/contact_again",
            "target": ""
        }, {
            "name": "Facebook",
            "icon": "social-networks/FB.png",
            "alt": "Lien vers la page Facebook",
            "redirect": "https://www.facebook.com/FestivalProjectionTransition/",
            "target": "_blank"
        }, {
            "name": "Instagramme",
            "icon": "social-networks/INSTA.png",
            "alt": "Lien vers la page Instagramme",
            "redirect": "https://www.instagram.com/projectiontransition/",
            "target": "_blank"
        }, {
            "name": "Youtube",
            "icon": "social-networks/YT.png",
            "alt": "Lien vers la page Youtube",
            "redirect": "https://www.youtube.com/channel/UCgSSefHpeDC42nXZcOy97aA",
            "target": "_blank"
        }],
        "name": "footer",
        "TYPE": {
            "navigation": true,
            "copyright": true
        },
        "BRAND": {
            "LOGO": {
                "path": "logo/Logo_Principal.jpg",
                "alt": "Lien vers le haut de la page",
                "style": "width: 100%; max-width:130px;"
            },
            "NAME": ""
        },
        "COPYRIGHT": {
            "value": "©2021 - Projection Transition",
            "style": "font-size:1rem;",
            "bootstrapClass": "mx-3"
        },
        "STYLE": {
            "FOOTER": {
                "bootstrapClass": "bg-white text-dark align-items-center",
                "style": ""
            },
            "NAVIGATION": {
                "bootstrapClass": "row bg-white text-dark align-items-center px-3 py-2 ",
                "style": "min-height:15vh;"
            },
            "COPYRIGHT": {
                "bootstrapClass": "row align-items-center my-1",
                "style": ""
            },
            "TITLE": {
                "bootstrapClass": "mx-3 fw-bold",
                "style": "font-size:1rem;cursor:pointer;"
            },
            "SOCIAL_NETWORKS": {
                "bootstrapClass": "",
                "style": "max-width: 7vh;height: auto;"
            }
        },
        "__v": 2,
        "updatedAt": {
            "$date": "2022-08-07T14:49:52.135Z"
        }
    }
</script>

<svelte:head>
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous">
    </script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="icon" type="image/png" href="favicon_48x48.png" sizes="48x48" />
    <link rel="icon" type="image/png" href="favicon_64x64.png" sizes="64x64" />
    <link rel="icon" type="image/png" href="favicon_96x96.png" sizes="96x96" />
    <link rel="icon" type="image/png" href="favicon_128x128.png" sizes="128x128" />
    <link rel="icon" type="image/png" href="favicon_196x196.png" sizes="196x196" />
</svelte:head>

<div id='up'></div>

<!-- <ContactButton /> -->

<main>
    <Nav navBar={navBar} />
    <div class="m-0">
        <div class="overlay">
            <div class="warning bg-tangerine px-3 py-3 text-center rounded">
                <h1>
                    Le festival revient du 17 au 19 novembre 2023 à Paris, Angers, Toulouse, Lyon et Bruxelles ! Toutes
                    les informations
                    seront disponibles ici prochainement.<br>
                </h1>
                <p class="contact mt-3">
                    Pour toute question :
                    <a href="mail:contact@projectiontransition.fr">contact@projectiontransition.fr</a>
                </p>
            </div>
        </div>
        <slot></slot>
    </div>
</main>

<footer>
    <Footer footer={footer} />
</footer>

<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(255, 255, 255, 0.6);
        z-index: 10;
    }

    .warning {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 8px 8px 10px rgba(255, 255, 255, 0.4);
    }

    .contact {
        font-size: 20px;
    }

    a {
        color: white;
    }
</style>
