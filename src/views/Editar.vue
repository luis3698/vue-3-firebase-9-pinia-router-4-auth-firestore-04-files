<template>
    <div>
        <h1>Editar id: {{ route.params.id }}</h1>
        <a-form
            name="editform"
            autocomplete="off"
            layout="vertical"
            :model="formState"
            @finish="onFinish"
        >
            <a-form-item
                name="url"
                label="Ingrese una URL"
                :rules="[
                    {
                        required: true,
                        whitespace: true,
                        pattern: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
                        message: 'Ingrese una URL válida',
                    },
                ]"
            >
                <a-input v-model:value="formState.url"></a-input>
            </a-form-item>
            <a-form-item>
                <a-button
                    type="primary"
                    html-type="submit"
                    :loading="databaseStore.loading"
                    :disabled="databaseStore.loading"
                >
                    Editar URL</a-button
                >
            </a-form-item>
        </a-form>
    </div>
</template>

<script setup>
import { onMounted, reactive } from "vue";
import { useRoute } from "vue-router";
import { useDatabaseStore } from "../stores/database";
import { message } from "ant-design-vue";

const databaseStore = useDatabaseStore();

const route = useRoute();

const formState = reactive({
    url: "",
});

const onFinish = async (value) => {
    console.log("todo correcto " + value);
    const error = await databaseStore.updateUrl(route.params.id, formState.url);
    if (!error) {
        formState.url = "";
        return message.success("URL editada ✅");
    }

    switch (error) {
        // buscar errores de firestore
        default:
            message.error(
                "Ocurrió un error en el servidor ❌ intentelo más tarde..."
            );
            break;
    }
};

onMounted(async () => {
    formState.url = await databaseStore.leerUrl(route.params.id);
});
</script>
