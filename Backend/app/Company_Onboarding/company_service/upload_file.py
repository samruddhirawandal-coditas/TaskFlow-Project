# import logging
# import boto3
# import os
# import requests
# from pathlib import Path
# from botocore.exceptions import ClientError
# from botocore.config import Config
# from ...utils.config import setting


# def create_presigned_url(
#     bucket_name,
#     object_name,
#     expiration=3600,
# ):
#     s3_client = boto3.client(
#         's3',
#         region_name=setting.AWS_REGION,
#         config=Config(
#             signature_version='s3v4',
#             s3={'addressing_style': 'virtual'},
#         ),
#     )
#     try:
#         response = s3_client.generate_presigned_url(
#             'put_object',
#             Params={'Bucket': bucket_name, 'Key': object_name},
#             ExpiresIn=expiration
#         )
#     except ClientError as e:
#         logging.error(e)
#         return None
#     return response


# def uplaod_file(file_path,s3_object_name=None):
#     if s3_object_name is None:
#         object_name = os.path.basename(file_path)
#     else:
#          object_name=s3_object_name
#     response = create_presigned_url(setting.AWS_S3_BUCKET_NAME, object_name)
#     if not response:
#         logging.error("Failed to generate presigned data.")
#         return False
#     logging.info(f"Uploading {file_path} to s3")  
#     try:

#         with open(file_path, 'rb') as f:
#             files = {'file': (object_name, f)}
#             http_response = requests.put(response['url'], data=response['fields'], data=f)

#         if http_response.status_code in [200,201]:
#             logging.info(f"Successfully uploaded! Status code: {http_response.status_code}")
#             return True
#         else:
#             logging.error(f"Upload failed. Status code: {http_response.status_code}, Response: {http_response.text}")
#             return False

#     except FileNotFoundError:
#         logging.error(f"Local file not found: {file_path}")
#         return False
#     except Exception as e:
#         logging.error(f"An error occurred during upload: {e}")
#         return False
    
