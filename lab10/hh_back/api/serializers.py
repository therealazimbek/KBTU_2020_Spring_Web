from rest_framework import serializers

from .models import Company, Vacancy


class CompanySerializer2(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        company = Company.objects.create(
            name=validated_data['name'],
            description=validated_data['description'],
            city=validated_data['city'],
            address=validated_data['address'],
        )

        return company

    def update(self, instance, validated_data):
        instance.name = validated_data['name']
        instance.description = validated_data['description']
        instance.city = validated_data['city']
        instance.address = validated_data['address']
        instance.save()

        return instance


class CompanySerializer(serializers.ModelSerializer):

    class Meta:
        model = Company
        fields = '__all__'


class VacancySerializer2(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    description = serializers.CharField()
    salary = serializers.FloatField()
    company = CompanySerializer(read_only=True)
    company_id = serializers.IntegerField(write_only=True)

    def create(self, validated_data):
        company = Company.objects.create(
            name=validated_data['name'],
            description=validated_data['description'],
            salary=validated_data['salary'],
            company_id=validated_data['company_id'],
        )

        return company

    def update(self, instance, validated_data):
        instance.name = validated_data['name']
        instance.description = validated_data['description']
        instance.salary = validated_data['salary']
        instance.company_id = validated_data['company_id']
        instance.save()

        return instance


class VacancySerializer(serializers.ModelSerializer):
    company = CompanySerializer(read_only=True)
    company_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description', 'salary', 'company', 'company_id')
